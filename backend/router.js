const router = require('express').Router();

// Middlewares
const auth = require('./middlewares/auth');

//Importamos Routes definidas en views
const JuegoRouter = require('./views/JuegoRouter');
const CategoryRouter = require('./views/CategoryRouter');
const UserRouter = require('./views/UserRouter');

//Rutas
router.use('/api', UserRouter); //Login and register routes
router.use('/juegos',auth, JuegoRouter); //add auth
router.use('/categories',auth, CategoryRouter);

module.exports = router;