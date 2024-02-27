import Joi from "joi";

export const registrationSchema = Joi.object({
    firstName: Joi.string().required().messages({
        "any.required": `"firstName" must be exist`
    }),
    lastName: Joi.string().required().messages({
        "any.required": `"lastName" must be exist`
    }),
    email: Joi.string().required().messages({
        "any.required": `"email" must be exist`
    }),
    password: Joi.string().required().messages({
        "any.required": `"password" must be exist`
    }),
})

export const addBlogSchema = Joi.object({
    title: Joi.string().required().messages({
        "any.required": `"title" must be exist`
    }),
    text: Joi.string().required().messages({
        "any.required": `"text" must be exist`
    }),
})