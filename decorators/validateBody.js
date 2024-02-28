import HttpError from "../helpers/HttpError.js";

const validateBody = schema => {
    const fun = async (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            return next(HttpError(400, error.message));
        }
        next();
    }
    return fun;
};
export default validateBody;