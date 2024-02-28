import express from "express";
import isEmptyBody from "../../middlewares/isEmptyBody.js";
import { addBlogSchema } from "../../schemas/schemas.js";
import { addBlog } from "../../controllers/blog/addBlog.js";
import validateBody from "../../decorators/validateBody.js";
import ctrlWrapper from "../../decorators/ctrlWrapper.js";
import { getAll } from "../../controllers/blog/allBlogs.js";
import authenticate from "../../middlewares/authenticate.js";

const blogRouter = express.Router();

blogRouter.use(authenticate);
blogRouter.get('/', ctrlWrapper(getAll));
blogRouter.post('/', isEmptyBody, validateBody(addBlogSchema), ctrlWrapper(addBlog));

export default blogRouter;