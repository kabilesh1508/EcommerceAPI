using EcommerceAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace EcommerceAPI.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions options) : base(options)
        {
            
        }
        public DbSet<Product> Products { get; set; }
        public DbSet<Basket> baskets { get; set; }
    }
}
