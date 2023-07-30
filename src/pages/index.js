import Head from "next/head";
import MainLayout from "@/layouts/MainLayout";
import HeroSection from "@/components/ui/home/HeroSection";
import FeatureProducts from "@/components/ui/home/FeatureProducts";
import { api } from "@/helpers/api.helper";
import FeatureCategories from "@/components/ui/home/FeatureCategories";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Rig Genie</title>
        <meta
          name="description"
          content="This website will guide you to build your desired pc."
        />
      </Head>

      <HeroSection />
      <FeatureProducts products={products} />
      <FeatureCategories />
    </>
  );
}

Home.getLayout = function (page) {
  return <MainLayout>{page}</MainLayout>;
};

export const getStaticProps = async () => {
  // if (typeof window === "undefined") {
  //   return {
  //     props: {
  //       products: [],
  //     },
  //   };
  // }

  const res = await api.get("/products?limit=6");

  return {
    props: {
      products: res.data.data,
    },
    revalidate: 60,
  };
};
