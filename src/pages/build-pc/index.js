import MiniProductCard from "@/components/ui/MiniProductCard";
import MainLayout from "@/layouts/MainLayout";
import { PCBuilderActions } from "@/redux/features/pcBuilder.slice";
import Link from "next/link";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const categories = ["CPU", "Motherboard", "RAM", "PSU", "Storage", "Casing"];

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
  const dispatch = useDispatch();
  const data = useSelector((state) => state.pcBuilder);

  const showBuild = allSelected(data, 5);

  const handleBuild = () => alert("PC Build!");

  const clear = (category) => {
    dispatch(PCBuilderActions.removeFromBuilder(category));
  };

  return (
    <section className="flex flex-col px-8 py-4 max-w-[800px] mx-auto">
      <h1 className="mb-4 text-2xl font-bold text-center">Build Your PC</h1>

      {/* List */}
      <div className="flex flex-col gap-3">
        {categories.map((category) => (
          <div
            key={category}
            className="flex justify-between gap-4 p-4 border rounded-lg shadow-lg min-w-[200px]"
          >
            <div className="flex-grow">
              <h3 className="font-bold">{category}</h3>
              {data[category] && <MiniProductCard product={data[category]} />}
            </div>
            <div className="flex flex-col justify-center gap-4">
              <Link
                className="btn btn-sm btn-primary btn-outline"
                href={`/build-pc/choose/${category}`}
              >
                {data[category] ? "Change" : "Choose"}
              </Link>

              <button
                onClick={() => clear(category)}
                className={
                  data[category] ? "btn btn-sm btn-outline btn-error" : "hidden"
                }
              >
                Clear
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleBuild}
        className={`btn btn-primary min-w-[100px] mx-auto my-4 ${
          showBuild ? "" : "btn-disabled"
        }`}
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
