import React, { useEffect, useState } from "react";
import Product from "./Product";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);

  function handleClick() {
    console.log("Button clicked, loading products...");
    setLoad(true);
  }

  useEffect(() => {
    console.log("Call useEffect with []");
  }, []);

  useEffect(() => {
    console.log("Product List Component Mounted");
    if (load) {
      fetch("/products.json")
        .then((res) => res.json())
        .then((products) => setProducts(products));
    }
  }, [load]);

  return (
    <div>
      <h1>Product List</h1>
      <button onClick={handleClick}>Load Products</button>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
