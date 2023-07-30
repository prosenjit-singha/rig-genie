import React from "react";
import Image from "next/image";
import Link from "next/link";

function ProductCard({ product, builder }) {
  const handleAddToBuilder = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <Link
      className="flex gap-1 shadow-xl card card-compact bg-base-100 hover:shadow-xl hover:shadow-green-600/50"
      role="link"
      href={`/product/${product._id}`}
    >
      <figure>
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="max-h-[280px] object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="mb-auto card-title">{product.name}</h2>
        <div className="flex flex-col gap-1 mt-auto ">
          <p className="flex justify-between gap-4">
            <span className="h-fit"> Category: {product.category}</span>

            {product.inStock ? (
              <span className="badge badge-ghost ">
                In Stock: {product.inStock}
              </span>
            ) : (
              <span className="badge badge-error">Out Of Stock</span>
            )}
          </p>

          <p className="flex justify-between gap-4 ">
            <span>Rating: {product.rating}</span>
            <span>Price: ${product.price}</span>
          </p>
        </div>
        <div className={builder ? "" : "hidden"}>
          <button
            onClick={handleAddToBuilder}
            className="btn btn-sm btn-primary"
          >
            Add To Builder
          </button>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
