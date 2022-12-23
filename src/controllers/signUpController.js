import bcrypt from "bcrypt";
import connection from "../database/db.js";

export async function postSignUp(req, res) {
  const { name, email, password } = req.body;
  const passwordHashed = bcrypt.hashSync(password, 10);

  try {
    const existingEmail = await connection.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (existingEmail.rowCount > 0) {
      return res
        .status(409)
        .send("Esse e-mail já está cadastrado em nosso sistema.");
    }

    const newUser = await connection.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)",
      [name, email, passwordHashed]
    );

    res.send(201);
  } catch (err) {
    console.log(err);
  }
}
