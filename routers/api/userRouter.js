import express from "express";
import isEmptyBody from "../../middlewares/isEmptyBody.js";
import signup from "../../controllers/auth/signup.js";
import ctrlWrapper from "../../decorators/ctrlWrapper.js";
import validateBody from "../../decorators/validateBody.js";
import { registrationSchema } from "../../schemas/schemas.js";
import { currentUser } from "../../controllers/auth/current.js";

const userRouter = express.Router()

userRouter.post('/signup', isEmptyBody, validateBody(registrationSchema), ctrlWrapper(signup))
userRouter.get('/current', ctrlWrapper(currentUser))


export default userRouter;