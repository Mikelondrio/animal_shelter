import {Router} from "express";

import shelterApiController from "../controllers/shelter/shelterApiController.js";


const router  = Router();

router.get("/",shelterApiController.getAll);
router.get("/:id",shelterApiController.getById);
router.post("/",shelterApiController.create);
router.put("/:id",shelterApiController.update);
router.delete("/:id",shelterApiController.remove);
router.post("/:id/user",shelterApiController.addUser);
router.delete("/:id/user/:userId",shelterApiController.removeUser);

export default router;