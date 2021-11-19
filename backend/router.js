const router = require('express').Router();

// Middlewares
const auth = require('./middlewares/auth');

//Importamos Routes definidas en views
const JuegoRouter = require('./views/JuegoRouter');
const PedidoRouter = require('./views/PedidoRouter');
const UserRouter = require('./views/UserRouter');

//Rutas
router.use('/api', UserRouter); //Login and register routes
router.use('/juegos',auth, JuegoRouter); //add auth
router.use('/pedidos',auth, PedidoRouter);

module.exports = router;