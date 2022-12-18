import { usersSchema } from "../model/usersModel.js";

export async function usersSchemaValidation(req, res, next) {
  const { name, email, password } = req.body;

  const { error } = usersSchema.validate(
    { name, email, password },
    { abortEarly: false }
  );

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(422).send(errors);
  }

  next();
}
