import jwt from "jsonwebtoken";
import "dotenv/config";
import * as usersService from "../../models/users/usersBD.js";
const { JWT_SECRET } = process.env;

export const currentUser = async (req, res) => {
    const { authorization } = req.headers;
    const [bearer, token] = authorization.split(" ");
    const { id } = jwt.verify(token, JWT_SECRET);
    const { firstName } = await usersService.findById(id);
    res.status(200).json(firstName);
};
