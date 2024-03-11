import { product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useEffect, useState } from "react";



export default function Catalog() {
  const [products, setProducts] = useState<product[]>([]);
  useEffect(() => {
    fetch('http://localhost:5000/EcommerceAPI/Products')
      .then(response => response.json())
      .then(data => setProducts(data))

  }, [])

  return (
    <>

      <ProductList products={products} />

    </>
  );
}