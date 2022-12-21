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

export async function getUrlById(req, res) {
  const id = req.params.id;

  try {
    const urlById = await connection.query(
      "SELECT urls.id, urls.url, urls.shorturl FROM urls WHERE id = $1",
      [id]
    );

    if (urlById.rowCount === 0) {
      return res.sendStatus(404);
    }

    console.log(urlById.rows[0]);
    return res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
}

export async function openShortUrl(req, res) {
  const shortUrl = req.params.shortUrl;

  try {
    const urlDb = await connection.query(
      "SELECT * FROM urls WHERE shorturl = $1",
      [shortUrl]
    );

    if (urlDb.rowCount === 0) {
      return res.sendStatus(404);
    }

    const newView = urlDb.rows[0].clicks + 1;

    const addClick = await connection.query(
      `UPDATE urls 
        SET clicks= $1
      WHERE shorturl = $2;`,
      [newView, shortUrl]
    );

    console.log(addClick);
    console.log(urlDb.rows[0]);

    res.redirect(urlDb.rows[0].url);
  } catch (err) {
    console.log(err);
  }
}
