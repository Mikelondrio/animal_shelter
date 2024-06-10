import {Router} from "express";

import userApiController from "../controllers/user/userApiController.js";

const router  = Router();


router.post("/register",userApiController.register);
router.post("/login",userApiController.login);

export default router;