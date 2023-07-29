import config from "@/config";
import axios from "axios";

/**
 * Context Type
 * @typedef {object} Context
 * @property {any} data
 * @property {any} meta
 * @property {string} message
 * @property {number} status
 * @property {{[key: string]: string} | string | null} error
 */

/**
 * Send Response to client
 * @param {Response} res
 * @param {Context} context
 */
export const sendResponse = (res, context) => {
  const {
    status = 200,
    message = "Success",
    data = null,
    error = null,
    meta,
  } = context;

  res.status(status).json({
    error,
    status,
    message,
    data,
    meta,
  });
};

export const api = axios.create({
  baseURL: config.base_url,
});
