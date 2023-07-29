import React from "react";

const categories = [
  ["cpu", "CPU/Processor"],
  ["motherboard", "Motherboard"],
  ["ram", "RAM"],
  ["psu", "PSU"],
  ["storage", "Storage"],
  ["monitor", "Monitor"],
  ["gpu", "GPU"],
  ["mouse", "Mouse"],
  ["keyboard", "Keyboard"],
  ["others", "Others"],
];

function FeatureCategories() {
  return (
    <div>
      <h1 className="my-4 text-3xl font-black text-center">
        Feature Categories
      </h1>
    </div>
  );
}

export default FeatureCategories;
