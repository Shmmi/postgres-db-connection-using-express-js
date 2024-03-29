import { Router } from "express";
import userRoutes from "./user/index.js";
import postRoutes from "./post/index.js";
import commentRoute from "./comment/index.js";
import authRouter from "./auth/index.js";
import EmaiRouter from "./Email/index.js";
const allRoutes = Router();
allRoutes.use(userRoutes);
allRoutes.use(postRoutes);
allRoutes.use(commentRoute);
allRoutes.use(authRouter);
allRoutes.use(EmaiRouter);

export default allRoutes;