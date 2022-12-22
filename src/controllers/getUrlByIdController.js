import connection from "../database/db.js";

export async function getUrlById(req, res) {
  const id = req.params.id;

  try {
    const urlById = await connection.query(
      `SELECT urls.id, urls."shortUrl", urls.url FROM urls WHERE id = $1`,
      [id]
    );

    if (urlById.rowCount === 0) {
      return res.sendStatus(404);
    }

    return res.send(urlById.rows[0]).status(200);
  } catch (err) {
    console.log(err);
  }
}
