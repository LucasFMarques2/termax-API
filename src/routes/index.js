const {Router} = require("express");
const userRouter = require("./users.routes");
const notesRouter = require("./notes.routes");
const tagsRouter = require("./tags.routes");
const sessionsRoutes = require("./sessions.routes")

const router = Router();

router.use("/users", userRouter)
router.use("/notes", notesRouter)
router.use("/tags", tagsRouter)
router.use("/session", sessionsRoutes)

module.exports = router;