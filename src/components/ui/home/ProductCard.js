import React from "react";
import Image from "next/image";
import Link from "next/link";

function ProductCard({ product }) {
  return (
    <Link
      className="flex flex-row gap-1 border shadow-xl card card-compact bg-base-100"
      role="link"
      href={`/product/${product._id}`}
    >
      <figure>
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <div className="flex flex-col flex-grow gap-1">
          <p>Category: {product.category}</p>
          {product.inStock ? (
            <p className="badge badge-ghost">In Stock: {product.inStock}</p>
          ) : (
            <p className="badge badge-error">Out Of Stock</p>
          )}
          <p className="flex justify-between gap-4 mt-4">
            <span>Rating: {product.rating}</span>
            <span>Price: ${product.price}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
