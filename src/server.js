import express from "express";
import cors from "cors";
import router from "./routes/usersRoutes.js";
import dotenv from "dotenv";
dotenv.config();

import usersRouter from "./routes/usersRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);
app.use(usersRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running at ${port}`));
