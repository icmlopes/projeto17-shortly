import connection from "../database/db.js";

export async function openShortUrl(req, res) {
  const shortUrl = req.params.shortUrl;

  try {
    const urlDb = await connection.query(
      `SELECT * FROM urls WHERE "shortUrl" = $1`,
      [shortUrl]
    );

    if (urlDb.rowCount === 0) {
      return res.sendStatus(404);
    }

    const newView = urlDb.rows[0].clicks + 1;

    const addClick = await connection.query(
      `UPDATE urls 
        SET clicks= $1
      WHERE "shortUrl" = $2;`,
      [newView, shortUrl]
    );

    res.redirect(urlDb.rows[0].url);
  } catch (err) {
    console.log(err);
  }
}
