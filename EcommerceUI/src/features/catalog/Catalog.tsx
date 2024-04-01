import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useEffect, useState } from "react";



export default function Catalog() {
  const [products, setProducts] = useState<product[]>([]);
  const [loading,setLoading] = useState(true);
  useEffect(() => {
    agent.Catalog.list()
      .then(products=>setProducts(products))
      .catch(error => console.log(error))
      .finally(()=>setLoading(false))
  }, [])

  return (
    <>
    {loading ? <LoadingComponent message="Loading Products..."/> : <ProductList products={products} />}
    </>
  );
}