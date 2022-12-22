import bcrypt from "bcrypt";
import connection from "../database/db.js";
import { v4 as uuid } from "uuid";

export async function postSignIn(req, res) {
  const { email, password } = req.body;

  try {
    const getUser = await connection.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (!bcrypt.compareSync(password, getUser.rows[0].password)) {
      return res.status(401).send("Senha incorreta");
    }

    const token = uuid();

    await connection.query(
      'INSERT INTO sessions (token, "userId") VALUES  ($1, $2)',
      [token, getUser.rows[0].id]
    );
    console.log("Deu bom");
    console.log(token);

    res.send(token).status(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
