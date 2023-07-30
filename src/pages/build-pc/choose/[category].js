import ProductConst from "@/constants/products.const";
import { api } from "@/helpers/api.helper";
import React from "react";
import MainLayout from "@/layouts/MainLayout";
import ProductCard from "@/components/ui/products/ProductCard";

function ChooseProduct({ products }) {
  return (
    <section className="flex-grow p-4 px-8">
      <h1 className="text-2xl font-black">Products</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard builder product={product} key={product._id} />
        ))}
      </div>
    </section>
  );
}

export default ChooseProduct;

ChooseProduct.getLayout = function (page) {
  return <MainLayout>{page}</MainLayout>;
};

export const getStaticPaths = () => {
  const paths = ProductConst.categories.map((category) => ({
    params: { category },
  }));

  paths.push({ params: { category: "All" } });

  return { paths, fallback: false };
};

export async function getStaticProps(context) {
  if (typeof window === undefined) {
    return {
      props: {
        products: [],
      },
    };
  }
  const { category } = context.params;
  const res = await api.get(
    `/products${category === "All" ? "" : `?category=${category}`}`
  );

  return {
    props: {
      products: res.data.data,
    },
  };
}
