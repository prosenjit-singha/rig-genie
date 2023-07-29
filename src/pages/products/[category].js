import ProductConst from "@/constants/products.const";
import { api } from "@/helpers/api.helper";
import MainLayout from "@/layouts/MainLayout";
import React from "react";

function Products() {
  return <></>;
}

export default Products;

Products.getLayout = function (page) {
  return <MainLayout>{page}</MainLayout>;
};

export const getStaticPaths = () => {
  const paths = ProductConst.categories.map((category) => ({
    params: { category },
  }));

  return { paths, fallback: false };
};

export async function getStaticProps(context) {
  const { category } = context.params;
  const res = await api.get(`/products?category=${category}`);

  return {
    props: {
      products: res.data.data,
    },
  };
}
