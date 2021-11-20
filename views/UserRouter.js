const express = require('express');
const router = express.Router();

//Importo modelo de datos
const UsuarioController = require('../controllers/UsuarioController');


// Dos rutas: login y registro
// /api/singin & /api/singup
router.post('/signin', UsuarioController.signIn);
router.post('/signup', UsuarioController.signUp);


module.exports = router;