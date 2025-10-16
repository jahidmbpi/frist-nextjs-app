import React from "react";
import Productcard from "../../../components/product/productcard";
import { Iproduct } from "../../../type";

export default async function Products() {
  const res = await fetch("http://localhost:5000/product", {
    cache: "no-cache",
  });
  const products = await res.json();
  console.log(products);
  return (
    <div className="max-w-7xl mx-auto w-full">
      <div className="">
        <h2 className="text-center text-3xl">products</h2>
        <div className="grid grid-cols-4 gap-4">
          {products.map((product: Iproduct) => (
            <Productcard key={product.id} product={product}></Productcard>
          ))}
        </div>
      </div>
    </div>
  );
}
