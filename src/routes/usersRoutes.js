import { Router } from "express";
import { usersSchemaValidation } from "../middleware/usersValidationMiddleware.js";
import { postSignUp } from "../controllers/usersController.js";

const router = Router();

router.post("/signup", usersSchemaValidation, postSignUp);
// router.post("/signin");
// router.get("/users/me");

export default router;
