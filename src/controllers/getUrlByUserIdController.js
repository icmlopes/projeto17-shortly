import connection from "../database/db.js";

export async function getUserUrls(req, res) {
  const authorization = req.headers.authorization;
  const token = authorization?.replace("Bearer ", "");

  try {
    if (!token) {
      return res.sendStatus(401);
    }

    const getUserId = await connection.query(
      `
      SELECT * FROM sessions WHERE token = $1`,
      [token]
    );

    if (getUserId.rowCount === 0) {
      return res.sendStatus(401);
    }

    const getUserInfo = await connection.query(
      `
      SELECT * FROM users WHERE id = $1`,
      [getUserId.rows[0].userId]
    );

    if (getUserId.rows[0].userId !== getUserInfo.rows[0].id) {
      return res.sendStatus(404);
    }

    const getUserUrls = await connection.query(
      `SELECT * FROM urls WHERE "userId" = $1`,
      [getUserInfo.rows[0].id]
    );

    const getTotalClicks = await connection.query(
      `SELECT SUM(urls.clicks) FROM urls WHERE "userId" = $1`,
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
