const ctrlWrapper = ctrl => {
    const fun = async (req, res, next) => {
        try {
            await ctrl(req, res);
        } catch (error) {
            next(error);
        }
    };
    return fun;
};

export default ctrlWrapper;