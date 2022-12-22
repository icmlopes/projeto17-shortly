import joi from "joi";

export const loginSchema = joi.object({
  email: joi
    .string()
    .pattern(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)
    .required(),
  password: joi.string().required(),
});
