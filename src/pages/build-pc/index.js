import MainLayout from "@/layouts/MainLayout";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const categories = ["CPU", "Motherboard", "RAM", "PSU", "Storage", "Monitor"];

const allSelected = (obj, minSelectValue) => {
  let count = 0;
  for (let key in obj) {
    if (obj[key]) {
      count++;
    }
  }
  return count === minSelectValue;
};

function BuildPC() {
  const data = useSelector((state) => state.pcBuilder);

  const showBuild = allSelected(data, 6);

  return (
    <section className="flex flex-col px-8 py-4">
      <h1 className="mb-4 text-2xl font-bold text-center">Build Your PC</h1>

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

      <button
        className={
          showBuild ? "btn btn-primary min-w-[100px] mx-auto my-4 " : "hidden"
        }
      >
        BUILD
      </button>
    </section>
  );
}

export default BuildPC;

BuildPC.getLayout = function (page) {
  return <MainLayout>{page}</MainLayout>;
};
