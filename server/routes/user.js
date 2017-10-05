let router = require("express").Router();
import * as UserController from "../controllers/user";

// OK
router.post("/new", UserController.newUser);

router.get("/:username", UserController.getUser);
router.put("/:username", UserController.updateUser);
router.delete("/:username", UserController.deleteUser);

// OK
router.get("/", UserController.getUsers);

export default router;
