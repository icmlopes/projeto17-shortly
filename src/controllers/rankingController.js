import connection from "../database/db.js";

export async function getRanking(req, res) {
  try {
    const ranking =
      await connection.query(`SELECT users.id, users.name, SUM(COALESCE(urls.clicks, 0)) AS "visitCount", COUNT(urls.id) AS "linksCount" 
FROM users 
  LEFT JOIN urls ON users.id = urls."userId" 
GROUP BY users.id 
ORDER BY "visitCount" DESC LIMIT(10);`);

    if (ranking.rowCount === 0) {
      return res.sendStatus(400);
    }

    res.send(ranking.rows).status(200);
  } catch (err) {
    console.log(err);
  }
}
