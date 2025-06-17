import express from "express";
import * as UserController from "../app/controllers/UserController.js";
import * as BlogController from "../app/controllers/BlogController.js"
import authMiddleware from "../app/middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", UserController.registerController);
router.post("/login", UserController.loginController);

router.post("/create", authMiddleware, BlogController.createController);
router.get("/read-user", authMiddleware, BlogController.readAllController);
router.patch("/update/:id", authMiddleware, BlogController.updateController);
router.delete("/delete/:id", authMiddleware, BlogController.deleteController)

export default router;