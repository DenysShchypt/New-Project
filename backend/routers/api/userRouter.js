import express from "express";
import isEmptyBody from "../../middlewares/isEmptyBody.js";
import signup from "../../controllers/auth/signup.js";
import ctrlWrapper from "../../decorators/ctrlWrapper.js";
import validateBody from "../../decorators/validateBody.js";
import { registrationSchema } from "../../schemas/schemas.js";


const userRouter = express.Router()


userRouter.post('/signup', isEmptyBody, validateBody(registrationSchema), ctrlWrapper(signup))
// userRouter.post('/signin', isEmptyBody)

export default userRouter