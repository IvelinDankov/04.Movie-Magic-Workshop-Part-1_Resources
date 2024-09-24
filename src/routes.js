import { Router } from "express";

import homeController from "./controllers/homeControllers.js";

const router = Router();

router.use(homeController);

export default router;