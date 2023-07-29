import Head from "next/head";
import MainLayout from "@/layouts/MainLayout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Rig Genie</title>
        <meta
          name="description"
          content="This website will guide you to build your desired pc."
        />
      </Head>
      <main className={`${inter.className}`}>
        <button className="btn btn-sm btn-outline btn-primary">Click Me</button>
      </main>
    </>
  );
}

Home.getLayout = function (page) {
  return <MainLayout>{page}</MainLayout>;
};
