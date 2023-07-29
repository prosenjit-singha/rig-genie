import { sendResponse } from "@/helpers/api.helper";
import connectDB from "@/helpers/db.helper";
import { getAllProducts } from "@/services/product.service";

/**
 *
 * @param {Request} req
 * @param {Response} res
 */
export default async function handler(req, res) {
  connectDB()
    .then(() => console.log("Database connection established"))
    .catch((err) => console.log("Database connection error", err));

  if (req.method === "GET") {
    const data = await getAllProducts();

    sendResponse(res, {
      message: "Products list retrieved successfully",
      data,
    });
  }
}
