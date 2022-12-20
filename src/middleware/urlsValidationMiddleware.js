import { urlsSchema } from "../model/urlsModel.js";

export async function urlsSchemaValidation(req, res, next) {
  const { url } = req.body;

  const { error } = urlsSchema.validate({ url }, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(422).send(errors);
  }

  next();
}
