import React from "react";
import Lottie from "lottie-react";
import data from "../../public/assets/lottie/not-found.json";
import MainLayout from "@/layouts/MainLayout";
import { useRouter } from "next/navigation";

function PageNotFound() {
  const router = useRouter();

  return (
    <section className="flex flex-col items-center justify-center flex-grow">
      <Lottie animationData={data} height={400} />

      <button
        className="mb-4 btn btn-primary btn-outline"
        onClick={() => router.back()}
      >
        Go Back
      </button>
    </section>
  );
}

PageNotFound.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default PageNotFound;
