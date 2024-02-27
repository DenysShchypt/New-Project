import express from "express";
import logger from "morgan";
import cors from "cors";

import blogRouter from "./routers/api/blogRouter.js";
import userRouter from "./routers/api/userRouter.js";

const app = express();

app.use(logger("dev"));
app.use(cors())
app.use(express.json())

app.use("/api/blogs", blogRouter)
app.use("/api/auth", userRouter)

app.use((req, res) => {
    res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
    const { status = 500, message = "Server error" } = err;
    res.status(status).json({
        message,
    })
})

export default app