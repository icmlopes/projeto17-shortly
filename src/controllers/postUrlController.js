import { nanoid } from "nanoid";
import connection from "../database/db.js";

export async function postUrl(req, res) {
  const authorization = req.headers.authorization;
  const token = authorization?.replace("Bearer ", "");
  const { url } = req.body;

  try {
    if (!token) {
      return res.sendStatus(401);
    }

    const getUser = await connection.query(
      'SELECT ("userId") FROM sessions WHERE token = $1',
      [token]
    );

    if (getUser.rowCount === 0) {
      return res.sendStatus(401);
    }

    const shortUrl = nanoid(10);

    const newUrl = await connection.query(
      `INSERT INTO urls (url, "shortUrl", "userId") VALUES ($1, $2, $3)`,
      [url, shortUrl, getUser.rows[0].userId]
    );

    res.send(shortUrl).status(201);
  } catch (err) {
    console.log(err);
  }
}
