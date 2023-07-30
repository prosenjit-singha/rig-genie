import ProductConst from "@/constants/products.const";
import { api } from "@/helpers/api.helper";
import React from "react";
import MainLayout from "@/layouts/MainLayout";
import AllProductsLayout from "@/layouts/AllProductsLayout";
import Link from "next/link";
import ProductCard from "@/components/ui/products/ProductCard";

function Products({ products }) {
  return (
    <section className="flex-grow p-4 pr-8">
      <h1 className="text-2xl font-black">Products</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </section>
  );
}

export default Products;

Products.getLayout = function (page) {
  return (
    <MainLayout>
      <AllProductsLayout>{page}</AllProductsLayout>
    </MainLayout>
  );
};

export const getStaticPaths = () => {
  const paths = ProductConst.categories.map((category) => ({
    params: { category },
  }));

  paths.push({ params: { category: "All" } });

  return { paths, fallback: false };
};

export async function getStaticProps(context) {
  if (typeof window === "undefined") {
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
