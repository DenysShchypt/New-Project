// import jwt from "jsonwebtoken";
// import "dotenv/config";
// import HttpError from "../helpers/HttpError.js";
// import * as usersService from "../models/users/usersBD.js"
// const { JWT_SECRET } = process.env

// const authenticate = async (req, res, next) => {
//     const { authorization } = req.headers;
//     if (!authorization) {
//         return next(HttpError(401, "Authorization not define"))
//     }

//     const [bearer, token] = authorization.split(" ");
//     if (bearer !== "Bearer") {
//         return next(HttpError(401))
//     }
//     try {
//         const { id } = jwt.verify(token, JWT_SECRET);
//         const user = await usersService.findById(id)

//         if (!user || !user.token || token !== user.token) {
//             return next(HttpError(401))
//         };
//         req.user = user;
//         next();
//     } catch (error) {
//         next(HttpError(401, error.message))
//     }

// };

// export default authenticate;