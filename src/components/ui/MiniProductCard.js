import Image from "next/image";
import React from "react";

function MiniProductCard({ product }) {
  return (
    <div className="flex p-3 border rounded-md">
      <Image src={product.image} alt={product.name} height={80} width={80} />
      <div>
        <h1 className="font-semibold">{product.name}</h1>
        <p>
          Price: <span className="badge badge-primary">${product.price}</span>
        </p>
        <p>
          Rating: <span className="badge badge-warning">{product.rating}</span>
        </p>
      </div>
    </div>
  );
}

export default MiniProductCard;
