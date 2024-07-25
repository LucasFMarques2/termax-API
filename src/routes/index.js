const {Router} = require("express");
const userRouter = require("./users.routes");
const notesRouter = require("./notes.routes");

const router = Router();

router.use("/users", userRouter)
router.use("/notes", notesRouter)

module.exports = router;