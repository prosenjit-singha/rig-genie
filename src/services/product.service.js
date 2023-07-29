const { default: ProductModel } = require("@/models/product.model");

export const getAllProducts = async () => {
  const data = await ProductModel.find().lean().exec();
  return data;
};
