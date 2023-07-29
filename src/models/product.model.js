import { categories } from "@/constants/category.const";
import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  category: { type: String, enum: categories, required: true },
  inStock: { type: Number, required: true },
  price: { type: Number, required: true },
  desc: { type: String, required: true },
  features: { type: String, required: true },
  rating: { type: Number, required: true },
  reviews: {
    type: [
      {
        rating: { type: Number, required: true },
        content: { type: String, required: true },
        _id: false,
      },
    ],
    default: [],
  },
});

const ProductModel = models["Product"] || model("Product", ProductSchema);

export default ProductModel;
