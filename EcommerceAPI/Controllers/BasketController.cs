using EcommerceAPI.Data;
using EcommerceAPI.DTO;
using EcommerceAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EcommerceAPI.Controllers
{
    public class BasketController : BaseApiController
    {
        private readonly StoreContext _context;
        public BasketController(StoreContext context)
        {
            this._context = context;
        }
        [HttpGet(Name = "GetBasket")]
        public async Task<ActionResult<BasketDto>> GetBasketItems()
        {
            var basket = await RetrieveBasket();

            if (basket == null) return NotFound();
            return MapBaskteToDto(basket);
        }

        

        [HttpPost] //  api/basket?productId=3&quantity=2
        public async Task<ActionResult<BasketDto>> AddItemToBasket(int productId,int quantity)
        {
            //get basket || Create Basket
            var basket = await RetrieveBasket();
            if (basket == null) basket = CreateBasket();
            //get product
            var product = await _context.Products.FindAsync(productId);
            if(product == null) return NotFound();
            //add item
            basket.AddItem(product, quantity);
            //Save Changes
            var result = await _context.SaveChangesAsync() > 0;
            if(result) return CreatedAtRoute("GetBasket",MapBaskteToDto(basket));
            return BadRequest(new ProblemDetails { Title = "Problem saving item to Basket" });
        }

        [HttpDelete]
        public async Task<ActionResult> RemoveBasketItem(int productId,int quantity)
        {
            //get basket
            var basket = await RetrieveBasket();
            if(basket == null) basket = CreateBasket();

            //remove item or reduce quantity
            basket.RemoveItem(productId, quantity);
            //save changes
            var result = await _context.SaveChangesAsync() > 0;
            if (result) return Ok();
            return BadRequest(new ProblemDetails { Title = "Problem deleting item in basket" });
        }
        private Basket CreateBasket()
        {
            var buyerId = Guid.NewGuid().ToString();
            var cookieOptions = new CookieOptions { IsEssential = true, Expires = DateTime.Now.AddDays(30) };
            Response.Cookies.Append("buyerId", buyerId, cookieOptions);
            var basket = new Basket { BuyerID = buyerId};
            _context.baskets.Add(basket);
            return basket;
        }

        private async Task<Basket> RetrieveBasket()
        {
            return await _context.baskets
                .Include(i => i.Items)
                .ThenInclude(i => i.Product)
                .FirstOrDefaultAsync(x => x.BuyerID == Request.Cookies["buyerId"]);
        }
        private BasketDto MapBaskteToDto(Basket basket)
        {
            return new BasketDto
            {
                Id = basket.Id,
                BuyerId = basket.BuyerID,
                Items = basket.Items.Select(item => new BasketItemDto
                {
                    ProductId = item.ProductId,
                    Name = item.Product.Name,
                    Price = item.Product.Price,
                    PictureUrl = item.Product.PictureUrl,
                    Type = item.Product.Type,
                    Brand = item.Product.Brand,
                    Quantity = item.Quantity
                }).ToList()
            };
        }
    }
}
