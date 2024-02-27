import * as blogsService from "../../models/blogs/blogsBD.js"

export const addBlog = async (req, res) => {
    const data = await blogsService.createBlog(req.body)
    res.status(201)
}