import joi from "joi";

export const signUpSchema = joi.object({
  name: joi.string().max(50).required(),
  email: joi
    .string()
    .pattern(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)
    .required(),
  password: joi.string().required(),
});
