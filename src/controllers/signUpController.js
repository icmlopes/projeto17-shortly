import bcrypt from "bcrypt";
import connection from "../database/db.js";

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

// export async function getUserUrls(req, res) {
//   const authorization = req.headers.authorization;
//   const token = authorization?.replace("Bearer ", "");

//   console.log("AAAAAAAAAAAAAA");
//   console.log(token);

//   try {
//     if (!token) {
//       return res.sendStatus(401); //falta fazer a parte do token inválido
//       //aqui só está validando quando não tem token
//     }

//     const getUserId = await connection.query(
//       `
//     SELECT * FROM sessions WHERE token = $1`,
//       [token]
//     );

//     if (getUserId.rowCount === 0) {
//       return res.sendStatus(401);
//     }

//     console.log("token", "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", getUserId);

//     const getUserInfo = await connection.query(
//       `
//     SELECT * FROM users WHERE id = $1`,
//       [getUserId.rows[0].userId]
//     );

//     const getUserUrls = await connection.query(
//       `SELECT * FROM urls WHERE userid = $1`,
//       [getUserInfo.rows[0].id]
//     );

//     const getTotalClicks = await connection.query(
//       `SELECT SUM(urls.clicks) FROM urls WHERE userid = $1`,
//       [getUserInfo.rows[0].id]
//     );

//     const result = getUserUrls.rows.map((i) => {
//       return {
//         id: getUserInfo.rows[0].id,
//         name: getUserInfo.rows[0].name,
//         visitCount: getTotalClicks.rows[0].sum,
//         shortenedUrls: {
//           id: i.id,
//           shortUrl: i.shorturl,
//           url: i.url,
//           visitCount: i.clicks,
//         },
//       };
//     });

//     return res.send(result).status(200);
//   } catch (err) {
//     console.log(err);
//   }
// }
