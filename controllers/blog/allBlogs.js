import * as blogsService from "../../models/blogs/blogsBD.js";

export const getAll = async (req, res) => {
    const data = await blogsService.getAllBlogs();
    res.status(200).json(data);
};