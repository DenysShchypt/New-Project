import fs from "fs/promises";
import { nanoid } from "nanoid";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import path from "path";

import "dotenv/config";
const { JWT_SECRET } = process.env;
import HttpError from "../../helpers/HttpError.js";

const usersPath = path.resolve("backend", "models", "users", "users.json");


const updateUsers = users => fs.writeFile(usersPath, JSON.stringify(users, null, 2));


export const getAllUsers = async () => {
    const users = await fs.readFile(usersPath, "utf8");
    return JSON.parse(users);
}

export const createUser = async (data) => {

    const users = await getAllUsers();
    const findUser = users.some(user => user.email === data.email)
    if (findUser) {
        throw HttpError(409, "Email already in use")
    }

    const { password } = data
    const payload = {
        id: nanoid(),
    };
    const newUser = {
        id: nanoid(),
        ...data
    }
    console.log(newUser);

    users.push(newUser);
    await updateUsers(users);

    return newUser;
}


export const findById = async (id) => {
    const users = await getAllUsers();
    const findUser = users.find(user => user.id === id)
    if (!findUser) {
        throw HttpError(400, "Not found")
    }
    return findUser;
}