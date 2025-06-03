import React, { useEffect, useRef, useState } from "react";
import Product from "./Product";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const loaded = useRef(false);

  useEffect(() => {
    if (!loaded.current) {
      fetch("/products.json")
        .then((res) => res.json())
        .then((products) => {
          setProducts(products);
          loaded.current = true;
        });
    }

    return () => {
      console.log("Product List Component Unmounted");
    };
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
