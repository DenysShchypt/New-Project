import jwt from "jsonwebtoken";
import "dotenv/config";
import * as blogsService from "../../models/blogs/blogsBD.js";
import * as usersService from "../../models/users/usersBD.js";
const { JWT_SECRET } = process.env;

export const addBlog = async (req, res) => {
    const { authorization } = req.headers;
    const [bearer, token] = authorization.split(" ");
    const { id } = jwt.verify(token, JWT_SECRET);
    const { firstName, lastName } = await usersService.findById(id);
    const data = await blogsService.createBlog({ ...req.body, firstName, lastName });
    res.status(201).json(data);
};