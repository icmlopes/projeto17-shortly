import { nanoid } from "nanoid";
import connection from "../database/db.js";

export async function postUrl(req, res) {
  const authorization = req.headers.authorization;
  const token = authorization?.replace("Bearer ", "");
  const { url } = req.body;

  try {
    console.log("AAAAAAAAAAAAAAAAA");
    console.log(token);

    if (!token) {
      return res.sendStatus(401);
    }

    const getUser = await connection.query(
      'SELECT ("userId") FROM sessions WHERE token = $1',
      [token]
    );

    console.log("BBBBBBBBBBBBBBBB");
    console.log(getUser.rows[0].userId);
    const shortUrl = nanoid(10);

    const newUrl = connection.query(
      "INSERT INTO urls (url, shortUrl, userId) VALUES ($1, $2, $3)",
      [url, shortUrl, getUser.rows[0].userId]
    );

    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
}
