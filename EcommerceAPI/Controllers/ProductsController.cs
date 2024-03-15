using EcommerceAPI.Data;
using EcommerceAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EcommerceAPI.Controllers
{
    public class ProductsController : BaseApiController
    {
        private readonly StoreContext _Context;
        public ProductsController(StoreContext context)
        {
            this._Context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            return await _Context.Products.ToListAsync();
            
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var product= await _Context.Products.FindAsync(id);
            if (product == null) return NotFound();
            return Ok(product);
        }
    }
}
