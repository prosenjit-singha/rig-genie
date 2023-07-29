/**
 *
 * @param {{page?: number | undefined;limit?: number | undefined;sortBy?: string | undefined;sortOrder?: SortOrder | undefined;}} options
 * @returns {{page?: number | undefined;limit?: number | undefined;sortBy?: string | undefined;sortOrder?: SortOrder | undefined;}}
 */

export const calcPagination = (options) => {
  const page = Number(options.page || 1);
  const limit = Number(options.limit || 20);
  const skip = (page - 1) * limit;

  const sortBy = options.sortBy || "createdAt";
  const sortOrder = options.sortOrder || "desc";

  return {
    page,
    limit,
    skip,
    sortBy,
    sortOrder,
  };
};
