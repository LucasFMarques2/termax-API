const {Router} = require("express")

const SessionsController = require('../controllers/SessionsController');
const sessionsCotroller = new SessionsController();

const sessionRoutes = Router();

sessionRoutes.post('/', sessionsCotroller.create);

module.exports = sessionRoutes