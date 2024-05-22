import {Router} from "express";
import userRouter from "./userRouter.js";
import animalRouter from "./animalRouter.js";
import shelterRouter from "./shelterRouter.js";
import {isAuthenticated,isAdmin} from "../middlewares/authMiddleware.js";

const router  =  Router();

router.get("/",(req,res)=>{
    res.json({data:"hello api"});
})
router.use("/user",isAdmin,userRouter);
router.use("/animal",isAuthenticated,animalRouter);
router.use("/shelter",isAuthenticated,shelterRouter);

export default router;