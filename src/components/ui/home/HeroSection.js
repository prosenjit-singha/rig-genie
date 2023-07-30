import React from "react";
import animationData from "../../../../public/assets/lottie/person-computer.json";
import Lottie from "lottie-react";
import Link from "next/link";

function HeroSection() {
  return (
    <section className="gap-5 px-8 py-4 lg:flex">
      <div className="flex flex-col justify-center w-full gap-4">
        <h1 className="text-5xl font-bold">
          Welcome to RigGenie - Your Ultimate Resource for Rigging Solutions
        </h1>
        <p className="text-xl">
          Are you in search of cutting-edge rigging solutions for your next
          project? Look no further! RigGenie is your one-stop destination for
          top-of-the-line rigging products and services. From lifting equipment
          to safety gear, we&#39;ve got you covered!
        </p>

        <Link href="/build-pc" className="btn btn-primary w-fit">
          Build Your PC Now
        </Link>
      </div>
      <Lottie
        animationData={animationData}
        className="h-[350px] sm:w-fit-content lg:w-[800px]"
      />
    </section>
  );
}

export default HeroSection;
