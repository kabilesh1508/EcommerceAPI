using EcommerceAPI.Models;

namespace EcommerceAPI.Data
{
    public class DbInitializer
    {
        public static void Initialize(StoreContext context)
        {
            if (context.Products.Any()) return;

            var products = new List<Product>
            {
                new Product
{
    Name = "Nike Black T-Shirt",
    Description = "Men's Drifit Black T-Shirt Suitable for all sports",
    Price = 1295,
    PictureUrl = "/images/products/nike-tshirt1.png",
    Brand = "Nike",
    Type = "T-Shirt",
    QuantityInStock = 100
},
new Product
{
    Name = "Barcelona Jersey",
    Description = "The F.C. Barcelona 2023/24 Home kit honours the 30-year journey of the Women's squad being incorporated into the club. The crest has a hidden diamond shape that was historically used by the Women's team, and the classic stripes have a diamond pattern along the edges. Our Match collection pairs authentic design details with lightweight, quick-drying technology to help keep the world's biggest football stars cool and comfortable on the pitch",
    Price = 7995,
    PictureUrl = "/images/products/nike-tshirt2.png",
    Brand = "Nike",
    Type = "T-Shirt",
    QuantityInStock = 100
},
new Product
{
    Name = "Air Jordan 1 Low",
    Description = "Always in, always fresh. The Air Jordan 1 Low sets you up with a piece of Jordan history and heritage that's comfortable all day. Choose your colours, then step out in the iconic profile that's built with a high-end mix of materials and encapsulated Air in the heel",
    Price = 8295,
    PictureUrl = "/images/products/nike-shoe1.png",
    Brand = "Nike",
    Type = "Shoe",
    QuantityInStock = 100
},
new Product
{
    Name = "Nike Repel Miler",
    Description = "An essential piece to your running game gets an update on the Nike Repel Miler Jacket. It's built to take on wet weather with a water-repellent design and a hood. The packable design features a look steeped in Nike's heritage. This product is made from 100% recycled polyester fibres.",
    Price = 4695,
    PictureUrl = "/images/products/nike-jacket1.png",
    Brand = "Nike",
    Type = "Jacket",
    QuantityInStock = 100
},
new Product
{
    Name = "Nike Gym Club",
    Description = "Whatever your fitness goal is, let this duffel bag be your companion. Simple and sleek, the Nike Gym Club Duffel has the space to hold all the essentials without the bulkiness of a normal duffel. The double zip main compartment has the space for shoes, clothes or other necessities, while the zipped front pocket keeps your small stuff organised. Whether carrying it with the removable and adjustable shoulder strap or its handles, this bag is an easy-to-grab essential.",
    Price = 2795,
    PictureUrl = "/images/products/nike-bag1.png",
    Brand = "Nike",
    Type = "Bag",
    QuantityInStock = 100
},
new Product
{
    Name = "Men's Jacquard Collar Slim Fit Polo",
    Description = "This Men's Jacquard Collar Slim Fit Polo is perfect for any sports fan or casual wear enthusiast. Featuring a front button placket",
    Price = 2299,
    PictureUrl = "/images/products/puma-tshirt1.png",
    Brand = "Puma",
    Type = "T-Shirt",
    QuantityInStock = 100
},
new Product
{
    Name = "MAPF1 A3rokart Mid Men's Motorsport Sneakers",
    Description = "PUMA Motorsport and Mercedes-AMG Petronas have been driving for success since 2012, creating exciting fanwear and high-",
    Price = 9999,
    PictureUrl = "/images/products/puma-shoe1.png",
    Brand = "Puma",
    Type = "Shoe",
    QuantityInStock = 100
},new Product
{
    Name = "PWR XX NITRO™ Women's Training Shoes",
    Description = "Her fit, her workouts, her style. The PWR XX NITRO™ training shoes, engineered specifically for women’s feet.",
    Price = 8999,
    PictureUrl = "/images/products/puma-shoe2.png",
    Brand = "Puma",
    Type = "Shoe",
    QuantityInStock = 100
},new Product
{
    Name = "Iconic T7 Men's Track Jacket",
    Description = "A PUMA original, the T7 track-inspired collection made a name for itself with 7cm signature stripes and quickly became as popular on city streets",
    Price = 4999,
    PictureUrl = "/images/products/puma-jacket1.png",
    Brand = "Puma",
    Type = "Jacket",
    QuantityInStock = 100
},new Product
{
    Name = "F1 Unisex Backpack",
    Description = "Whether in the pitlane, in the stands, and especially when you're on the road hopping from Grand Prix to Grand Prix",
    Price = 5999,
    PictureUrl = "/images/products/puma-bag1.png",
    Brand = "Puma",
    Type = "Bag",
    QuantityInStock = 100
},new Product
{
    Name = "Zara Embroided Knit T-Shirt",
    Description = "Boxy fit T-shirt made of spun cotton fabric. Round neck and short sleeves. Contrast embroidered slogan detail on the front.",
    Price = 2590,
    PictureUrl = "/images/products/zara-tshirt1.png",
    Brand = "Zara",
    Type = "T-Shirt",
    QuantityInStock = 100
},new Product
{
    Name = "Zara T-Shirt With Abstract Print",
    Description = "Knit T-shirt made of spun cotton fabric. Featuring a round neckline and short sleeves.",
    Price = 2290,
    PictureUrl = "/images/products/zara-tshirt2.png",
    Brand = "Zara",
    Type = "T-Shirt",
    QuantityInStock = 100
},new Product
{
    Name = "Zara Chelsea Boots",
    Description = "Chelsea style boot. Elasticated shaft on both sides and rear pull tab for an easy fit. Round last. Double stitching around the upper.",
    Price = 4990,
    PictureUrl = "/images/products/zara-shoe1.png",
    Brand = "Zara",
    Type = "Shoe",
    QuantityInStock = 100
},new Product
{
    Name = "Zara Denim Jacket",
    Description = "Relaxed-fit jacket. Lapel collar and long sleeves with buttoned cuffs. Flap pockets on the chest and side pockets at the hip. Contrast topstitching detail all over the garment. Button-up front.",
    Price = 4990,
    PictureUrl = "/images/products/zara-jacket1.PNG",
    Brand = "Zara",
    Type = "Jacket",
    QuantityInStock = 100
},new Product
{
    Name = "Zara Ladies Bag",
    Description = "Crossbody bag. Double compartment with magnetic clasp closure. The main compartment has a large pocket without closure and another small pocket with zip closure.",
    Price = 3290,
    PictureUrl = "/images/products/zara-bag1.png",
    Brand = "Zara",
    Type = "Bag",
    QuantityInStock = 100
},new Product
{
    Name = "Adidas T-Shirt",
    Description = "If simplicity is your mantra, you'll love this adidas t-shirt. Clean and classic, it has a crewneck shape that looks good with just about everything in your wardrobe.",
    Price = 1999,
    PictureUrl = "/images/products/adidas-tshirt1.png",
    Brand = "Adidas",
    Type = "T-Shirt",
    QuantityInStock = 100
},new Product
{
    Name = "Switch FWD Running Shoes",
    Description = "An engineered EVA midsole structure features purpose-built voids that compress and expand under pressure, helping you forward with every stride.",
    Price = 13999,
    PictureUrl = "/images/products/adidas-shoe1.PNG",
    Brand = "Adidas",
    Type = "Shoe",
    QuantityInStock = 100
},new Product
{
    Name = "Y-3 Fuzzy Fleece Vest",
    Description = "A harmonious exploration of fashion and function, the Y-3 Fuzzy Fleece Vest leans on the outdoors for inspiration. It's crafted from a premium wool blend with a textured jacquard execution",
    Price = 26999,
    PictureUrl = "/images/products/adidas-jacket1.PNG",
    Brand = "Adidas",
    Type = "Jacket",
    QuantityInStock = 100
},new Product
{
    Name = "Flames Jacket",
    Description = "The hallmark of adidas Originals style always aims for comfort with an edge. This jacket packs in both. Its loose shape lets you move without restraint while zip pockets stow essentials.",
    Price = 9999,
    PictureUrl = "/images/products/adidas-jacket2.PNG",
    Brand = "Adidas",
    Type = "Jacket",
    QuantityInStock = 100
},new Product
{
    Name = "Adicolor Backpack",
    Description = "There's something quite satisfying about a classic backpack. It's your daily companion for commuting, heading to the gym and adventuring on the weekend.",
    Price = 2999,
    PictureUrl = "/images/products/adidas-bag1.PNG",
    Brand = "Adidas",
    Type = "Bag",
    QuantityInStock = 100
},
            };
            foreach(var product in products)
            {
                context.Products.Add(product);
            }

            context.SaveChanges();
        }
    }
}
