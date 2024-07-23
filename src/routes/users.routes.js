const {Router} = require("express");
const userRouter = Router();

const UsersController = require("../controllers/UsersController");

const userController = new UsersController();

userRouter.post("/", (req, res) => userController.create(req, res));
userRouter.put("/:id", (req, res) => userController.update(req, res));

module.exports = userRouter;