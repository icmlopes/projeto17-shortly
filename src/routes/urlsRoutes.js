import { Router } from "express";
import { deleteUrlById } from "../controllers/deleteUrlController.js";
import { getUrlById } from "../controllers/getUrlByIdController.js";
import { postUrl } from "../controllers/postUrlController.js";
import { openShortUrl } from "../controllers/redirectToShortUrlController.js";
import { getRanking } from "../controllers/rankingController.js";
import { urlsSchemaValidation } from "../middleware/urlsValidationMiddleware.js";

const router = Router();

router.post("/urls/shorten", urlsSchemaValidation, postUrl);
router.get("/urls/:id", getUrlById);
router.get("/urls/open/:shortUrl", openShortUrl);
router.delete("/urls/:id", deleteUrlById);
router.get("/ranking", getRanking);

export default router;
