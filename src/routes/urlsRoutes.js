import { Router } from "express";
import { postUrl } from "../controllers/urlsController.js";
import { urlsSchemaValidation } from "../middleware/urlsValidationMiddleware.js";

const router = Router();

router.post("/urls/shorten", urlsSchemaValidation, postUrl);
// router.get("/urls/:id");
// router.get("/urls/open/:shortUrl");
// router.delete("/urls/:id")
//router.get("/ranking") Dica: Para a última rota /ranking, você precisa usar left join.

export default router;
