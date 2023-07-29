export const categories = [
  "CPU/Processor",
  "Motherboard",
  "RAM",
  "PSU",
  "Storage",
  "Monitor",
  "GPU",
  "Mouse",
  "Keyboard",
  "Others",
];

export const searchableFields = ["name", "category"];

export const filterableFields = [
  "searchTerm",
  "category",
  "minPrice",
  "maxPrice",
];

const ProductConst = { categories, searchableFields, filterableFields };

export default ProductConst;
