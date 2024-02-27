import { Router } from "express";
import UserController from "../../controller/user/index.js";
const userRoutes = Router();
userRoutes.post("/user",UserController.create);
userRoutes.put("/user/:userId",UserController.update);
userRoutes.get("/user",UserController.get)

export default userRoutes;