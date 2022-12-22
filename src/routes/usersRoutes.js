import { Router } from "express";
import { signUpSchemaValidation } from "../middleware/signUpValidationMiddleware.js";
import { postSignUp } from "../controllers/signUpController.js";
import { postSignIn } from "../controllers/signInController.js";
import { getUserUrls } from "../controllers/getUrlByUserIdController.js";
import { loginSchemaValidation } from "../middleware/signInValidationMiddleware.js";

const router = Router();

router.post("/signup", signUpSchemaValidation, postSignUp);
router.post("/signin", loginSchemaValidation, postSignIn);
router.get("/users/me", getUserUrls);

export default router;
