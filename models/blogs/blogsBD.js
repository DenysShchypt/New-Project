import fs from "fs/promises";
import path from "path";
import { compareAsc, format } from "date-fns";
import { nanoid } from "nanoid";


const blogsPath = path.resolve("models", "blogs", "blogs.json");
const updateBlogs = blogs => fs.writeFile(blogsPath, JSON.stringify(blogs, null, 2));

export const getAllBlogs = async () => {
    const blogs = await fs.readFile(blogsPath, "utf8");
    return JSON.parse(blogs);
}

export const createBlog = async (data) => {
    const date = format(new Date(), "yyyy-MM-dd HH:mm:ss");
    const blogs = await getAllBlogs();
    const newBlog = {
        id: nanoid(),
        date,
        ...data
    }
    blogs.push(newBlog);
    await updateBlogs(blogs);
    return newBlog;
}