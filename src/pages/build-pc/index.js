import MainLayout from "@/layouts/MainLayout";
import Link from "next/link";
import React from "react";

const categories = ["CPU", "Motherboard", "RAM", "PSU", "Storage", "Monitor"];

function BuildPC() {
  return (
    <section className="px-8 py-4">
      <h1 className="text-2xl font-bold text-center">Build Your PC</h1>

      {/* List */}
      <div className="flex flex-col gap-3">
        {categories.map((category) => (
          <div
            key={category}
            className="flex justify-between p-4 border rounded-lg shadow-lg"
          >
            <div>
              <h3 className="font-bold">{category}</h3>
            </div>
            <div>
              <Link
                className="btn btn-sm btn-primary btn-outline"
                href={`/build-pc/choose/${category}`}
              >
                Choose
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BuildPC;

BuildPC.getLayout = function (page) {
  return <MainLayout>{page}</MainLayout>;
};
