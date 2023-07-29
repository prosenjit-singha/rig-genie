import { sendResponse } from "@/helpers/api.helper";
import connectDB from "@/helpers/db.helper";
import { getAllProducts } from "@/services/product.service";
import ProductConst from "@/constants/products.const";
import PaginationConst from "@/constants/pagination.const";
import { pick } from "@/helpers/obj.helper";

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
    const filters = pick(req.query, ProductConst.filterableFields);
    const paginationOptions = pick(req.query, PaginationConst.fields);

    const data = await getAllProducts(filters, paginationOptions);

    sendResponse(res, {
      message: "Products list retrieved successfully",
      data,
    });
  }
}
