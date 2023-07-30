import { api } from "@/helpers/api.helper";
import MainLayout from "@/layouts/MainLayout";
import Image from "next/image";
import React from "react";

function Product({ product }) {
  return (
    <section className="flex gap-8 px-16 py-4">
      <div>
        <table className="table">
          <tbody>
            <tr>
              <th className="min-w-[140px]">Product Name</th>
              <td className="text-xl font-bold">{product.name}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{product.desc}</td>
            </tr>
            <tr>
              <th>Category</th>
              <td>{product.category}</td>
            </tr>

            <tr>
              <th>In Stock</th>
              <td>
                {product.inStock ? (
                  <p className="badge badge-ghost ">
                    In Stock: {product.inStock}
                  </p>
                ) : (
                  <p className="badge badge-error">Out Of Stock</p>
                )}
              </td>
            </tr>

            <tr>
              <th>Price</th>
              <td>${product.price}</td>
            </tr>
            <tr>
              <th>Features</th>
              <td>{product.features}</td>
            </tr>
            <tr>
              <th>Your Rating</th>
              <td>4</td>
            </tr>
            <tr>
              <th>Avg. Rating</th>
              <td>{product.rating}</td>
            </tr>
          </tbody>
        </table>

        {/* reviews */}
        <h2 className="mt-4 text-lg font-medium">Reviews</h2>
        {product.reviews.map((review, i) => (
          <div className="p-4 mb-4 border rounded-lg border-slate-300" key={i}>
            <p className="font-bold">
              Mr Demo User <span className="badge">{review.rating}</span>
            </p>
            <p>{review.content}</p>
          </div>
        ))}
      </div>
      <div>
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={400}
        />
      </div>
    </section>
  );
}

export default Product;

Product.getLayout = function (page) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getStaticPaths() {
  const res = await api.get("/products?limit=100");

  const paths = res.data.data.map((product) => ({
    params: { id: product._id },
  }));

  console.log(paths);

  return { paths, fallback: "blocking" };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await api.get("/products/" + id);

  return {
    props: {
      product: res.data.data,
    },
  };
}
