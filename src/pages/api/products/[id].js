import { sendResponse } from "@/helpers/api.helper";
import ProductModel from "@/models/product.model";

/**
 * @param {Request} req
 * @param {Response} res
 */
export default async function handler(req, res) {
  const { id } = req.query;

  const data = await ProductModel.findById(id).lean().exec();

  sendResponse(res, {
    data,
    status: data ? 200 : 404,
    error: data ? null : "Product not found",
    message: data
      ? "Product retrieved successfully"
      : "Failed to retrieve product",
  });
}
