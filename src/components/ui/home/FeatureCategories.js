import React from "react";
import Image from "next/image";

const categories = [
  ["cpu.png", "CPU/Processor"],
  ["motherboard.png", "Motherboard"],
  ["ram.png", "RAM"],
  ["psu.png", "PSU"],
  ["storage.png", "Storage"],
  ["monitor.png", "Monitor"],
  ["others.jpg", "Others"],
  //   ["gpu.png", "GPU"],
  //   ["mouse.png", "Mouse"],
  //   ["keyboard.png", "Keyboard"],
];

function FeatureCategories() {
  return (
    <div className="py-8 my-4">
      <h1 className="mb-4 text-3xl font-black text-center">
        Feature Categories
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {categories.map(([path, name]) => (
          <div
            key={name}
            className="flex flex-col items-center justify-between gap-1 p-4 bg-slate-100 border border-green-700 min-w-[125px] rounded-md cursor-pointer hover:shadow-lg"
          >
            <Image
              src={`/assets/icons/${path}`}
              width={60}
              height={60}
              alt={name}
            />
            <h3 className="text-lg font-medium">{name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureCategories;
