import {Router} from "express";
import userRouter from "./userRouter.js";
import animalRouter from "./animalRouter.js";
import shelterRouter from "./shelterRouter.js";
import {isAuthenticated,isAdmin} from "../middlewares/authMiddleware.js";

const router  =  Router();

router.get("/",(req,res)=>{
    res.json({data:"hello api"});
})
router.use("/user",userRouter);
router.use("/animal",animalRouter);
router.use("/shelter",shelterRouter);

export default router;