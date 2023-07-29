import { api } from "@/helpers/api.helper";
import React from "react";

function Products() {
  return <div>Products</div>;
}

export default Products;

export async function getStaticProps(context) {
  console.log(context.params, context.searchParams);
  const res = api.get("/products");
  return {
    props: {
      products: [],
    },
  };
}
