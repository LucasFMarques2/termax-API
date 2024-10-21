// src/routes/users.js
const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const UsersController = require("../controllers/UsersController");
const UsersAvatarController = require("../controllers/UserAvatarController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const userRouter = Router();
const upload = multer(uploadConfig.MULTER);

const userController = new UsersController();
const userAvatarController = new UsersAvatarController();

userRouter.post("/", userController.create);
userRouter.put("/", ensureAuthenticated, userController.update);
userRouter.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update);
userRouter.get("/", ensureAuthenticated, userController.index);
userRouter.delete("/:id", ensureAuthenticated, userController.delete);
 

module.exports = userRouter;
