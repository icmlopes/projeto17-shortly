import { signUpSchema } from "../model/signUpModel.js";

export async function signUpSchemaValidation(req, res, next) {
  const { name, email, password } = req.body;

  const { error } = signUpSchema.validate(
    { name, email, password },
    { abortEarly: false }
  );

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(422).send(errors);
  }

  next();
}
