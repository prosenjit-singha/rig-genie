import { calcPagination } from "@/helpers/pagination.helper";

const { default: ProductModel } = require("@/models/product.model");

export const getAllProducts = async (filters, paginationOptions) => {
  const { searchTerm, ...filtersData } = filters;
  const { page, limit, skip, sortBy, sortOrder } =
    calcPagination(paginationOptions);

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: BookConst.searchableFields.map((field) => ({
        [field]: {
          $regex: searchTerm,
          $options: "i",
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => {
        return {
          [field]: {
            $regex: new RegExp(`^${value}$`, "i"), // Perform case-insensitive regex exact match
          },
        };
      }),
    });
  }

  const sortConditions = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const data = await ProductModel.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit)
    .lean()
    .exec();

  const totalResults = await ProductModel.countDocuments(whereConditions)
    .lean()
    .exec();

  const meta = {
    page,
    limit,
    sortBy,
    sortOrder,
    totalResults,
    totalPages: Math.round(totalResults / limit) + 1,
  };

  return { data, meta };
};
