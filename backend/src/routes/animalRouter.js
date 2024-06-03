import {Router} from "express";

import animalApiController from "../controllers/animal/animalApiController.js";


const router  = Router();

router.get("/",animalApiController.getAll);
router.get("/:id",animalApiController.getById);
router.post("/",animalApiController.create);
router.put("/:id",animalApiController.update);
router.delete("/:id",animalApiController.remove);
router.post("/:id/status",animalApiController.changeStatus);
router.post("/:id/user",animalApiController.addUser);
router.delete("/:id/user/:userId",animalApiController.removeUser);

export default router;