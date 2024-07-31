const {Router} = require("express");
const userRouter = require("./users.routes");
const notesRouter = require("./notes.routes");
const tagsRouter = require("./tags.routes");
<<<<<<< HEAD
const sessionRouter = require("./session.routes");

const router = Router();

router.use("/users", userRouter);
router.use("/notes", notesRouter);
router.use("/tags", tagsRouter);
router.use("/session", sessionRouter);
=======
const sessionsRoutes = require("./sessions.routes")

const router = Router();

router.use("/users", userRouter)
router.use("/notes", notesRouter)
router.use("/tags", tagsRouter)
router.use("/session", sessionsRoutes)
>>>>>>> 650ded0185161994fe0fa012591eb4c38d4323a5

module.exports = router;