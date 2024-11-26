const { Router } = require('express');

const AbastecimentoController = require('../controllers/AbastecimentoController');
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const abastecimentoRoutes = Router();

const abastecimentoController= new AbastecimentoController();

abastecimentoRoutes.use(ensureAuthenticated)

abastecimentoRoutes.get("/", abastecimentoController.index);
abastecimentoRoutes.post("/", abastecimentoController.create);
abastecimentoRoutes.get("/:id", abastecimentoController.show);
abastecimentoRoutes.delete("/:id", abastecimentoController.delete);



module.exports = abastecimentoRoutes;