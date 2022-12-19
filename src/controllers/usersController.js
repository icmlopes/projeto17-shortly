import bcrypt from "bcrypt";
import connection from "../database/db.js";
import { v4 as uuid } from "uuid";

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

    console.log(newUser);
    res.send(201);
  } catch (err) {
    console.log(err);
  }
}

export async function postSignIn(req, res) {
  const { email, password } = req.body;

  try {
    const getUser = await connection.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (!bcrypt.compareSync(password, getUser.rows[0].password)) {
      return res.status(401).send("Senha incorreta");
    } else {
      const token = uuid();

      await connection.query(
        'INSERT INTO sessions (token, "userId") VALUES  ($1, $2)',
        [token, getUser.rows[0].id]
      );
      console.log("Deu bom");
      console.log(token);
    }

    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
