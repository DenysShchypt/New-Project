import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

const blogsPath = path.resolve("backend", "models", "blogs", "blogs.json");
const updateBlogs = blogs => fs.writeFile(blogsPath, JSON.stringify(blogs, null, 2));

export const getAllBlogs = async () => {
    const blogs = await fs.readFile(blogsPath, "utf8");
    return JSON.parse(blogs);
}

export const createBlog = async (data) => {


    const blogs = await getAllBlogs();
    // Зробити запрос на юзера
    const newBlog = {
        id: nanoid(),
        date: new Date(),
        ...data
    }


    blogs.push(newBlog);
    await updateBlogs(blogs);
    return newBlog;
}