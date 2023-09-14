import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getBlog = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_GET_BLOG");
  }
};

const getBlogs = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_GET_BLOGS");
  }
};

const updateBlog = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_BLOG");
  }
};

const postBlog = ({ body }: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_POST_BLOG");
  }
};

const deleteBlog = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_BLOGg");
  }
};

export { getBlog, getBlogs, updateBlog, postBlog, deleteBlog };
