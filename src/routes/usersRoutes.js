import { Router } from "express";
import {
  usersSchemaValidation,
  loginSchemaValidation,
} from "../middleware/usersValidationMiddleware.js";
import {
  getUserUrls,
  postSignIn,
  postSignUp,
} from "../controllers/usersController.js";

const router = Router();

router.post("/signup", usersSchemaValidation, postSignUp);
router.post("/signin", loginSchemaValidation, postSignIn);
router.get("/users/me", getUserUrls);

export default router;
