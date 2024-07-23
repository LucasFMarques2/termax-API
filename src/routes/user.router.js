const { Router } = require("express");

const userRouter = Router();

userRouter.post("/", (req, res) => {
    res.send("deu bom a rota");
});

module.exports = userRouter;
