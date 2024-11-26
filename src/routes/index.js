const {Router} = require("express");
const userRouter = require("./users.routes");
const abastecimentoRouter = require("./abastecimento.routes");
const sessionRouter = require("./session.routes");

const router = Router();

router.use("/users", userRouter);
router.use("/abastecimento", abastecimentoRouter);
router.use("/session", sessionRouter);

module.exports = router;
