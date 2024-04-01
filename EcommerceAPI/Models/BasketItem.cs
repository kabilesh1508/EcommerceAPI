using System.ComponentModel.DataAnnotations.Schema;

namespace EcommerceAPI.Models
{
    [Table("BasketItems")]
    public class BasketItem
    {
        public int Id { get; set; }
        public int Quantity { get; set; }
        public int ProductId { get; set; }
        public Product Product { get; set; }

        //Navigations
        public int BasketId { get; set; }
        public Basket Basket { get; set; }
    }
}