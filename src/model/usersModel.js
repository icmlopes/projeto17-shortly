import joi from "joi";

export const usersSchema = joi.object({
  name: joi.string().max(50).required(),
  email: joi.string().required(),
  password: joi.string().required(),
});

export const loginSchema = joi.object({
  email: joi.string().required(),
  password: joi.string().required(),
});
