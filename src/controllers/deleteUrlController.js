import connection from "../database/db.js";

export async function deleteUrlById(req, res) {
  const authorization = req.headers.authorization;
  const token = authorization?.replace("Bearer ", "");
  const id = req.params.id;

  try {
    if (!token) {
      return res.sendStatus(401);
    }

    const tokenUserId = await connection.query(
      `SELECT sessions.token, sessions."userId" FROM sessions WHERE token = $1`,
      [token]
    );

    if (tokenUserId.rowCount === 0) {
      return res.sendStatus(401);
    }

    // const verifyUserId = await connection.query(
    //   `
    // SELECT id FROM users WHERE id = $1`,
    //   [tokenUserId.rows[0].userId]
    // );

    // if (verifyUserId === false) {
    //   return res.sendStatus(401);
    // }

    const urlDb = await connection.query("SELECT * FROM urls WHERE id = $1", [
      id,
    ]);

    if (!urlDb.rows[0]) {
      return res.sendStatus(404);
    }

    const deleteUrl = await connection.query(
      `DELETE FROM urls WHERE "userId" = $1`,
      [tokenUserId.rows[0].userId]
    );
    res.sendStatus(204);
  } catch (err) {
    console.log(err);
  }
}
