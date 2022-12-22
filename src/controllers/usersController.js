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

export async function getUserUrls(req, res) {
  const authorization = req.headers.authorization;
  const token = authorization?.replace("Bearer ", "");

  console.log("AAAAAAAAAAAAAA");
  console.log(token);

  try {
    if (!token) {
      return res.sendStatus(401);
    }

    const getUserId = await connection.query(
      `
    SELECT * FROM sessions WHERE token = $1`,
      [token]
    );

    const getUserInfo = await connection.query(
      `
    SELECT * FROM users WHERE id = $1`,
      [getUserId.rows[0].userId]
    );

    const getUserUrls = await connection.query(
      `SELECT * FROM urls WHERE userid = $1`,
      [getUserInfo.rows[0].id]
    );

    const getTotalClicks = await connection.query(
      `SELECT SUM(urls.clicks) FROM urls WHERE userid = $1`,
      [getUserInfo.rows[0].id]
    );

    const result = getUserUrls.rows.map((i) => {
      return {
        id: getUserInfo.rows[0].id,
        name: getUserInfo.rows[0].name,
        visitCount: getTotalClicks.rows[0].sum,
        shortenedUrls: {
          id: i.id,
          shortUrl: i.shorturl,
          url: i.url,
          visitCount: i.clicks,
        },
      };
    });

    return res.send(result).status(200);
  } catch (err) {
    console.log(err);
  }
}
