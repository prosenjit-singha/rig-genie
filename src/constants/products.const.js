export const categories = [
  "CPU",
  "Motherboard",
  "RAM",
  "PSU",
  "Storage",
  "Monitor",
  "GPU",
  "Mouse",
  "Keyboard",
  "Casing",
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
