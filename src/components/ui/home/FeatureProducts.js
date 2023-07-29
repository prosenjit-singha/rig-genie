import ProductCard from "@/components/ui/home/ProductCard";
import React from "react";

function FeatureProducts({ products }) {
  return (
    <section className="px-8 my-4">
      <h1 className="mb-4 text-3xl font-extrabold text-center">
        Feature Products
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </section>
  );
}

export default FeatureProducts;
