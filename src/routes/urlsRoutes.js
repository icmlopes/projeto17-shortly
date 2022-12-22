import { Router } from "express";
import {
  deleteUrlById,
  getRanking,
  getUrlById,
  openShortUrl,
  postUrl,
} from "../controllers/urlsController.js";
import { urlsSchemaValidation } from "../middleware/urlsValidationMiddleware.js";

const router = Router();

router.post("/urls/shorten", urlsSchemaValidation, postUrl);
router.get("/urls/:id", getUrlById);
router.get("/urls/open/:shortUrl", openShortUrl);
router.delete("/urls/:id", deleteUrlById);
router.get("/ranking", getRanking);

export default router;
