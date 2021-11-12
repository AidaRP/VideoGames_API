const express = require('express');
const router = express.Router();

//Importo modelo de datos
const JuegoController = require('../controllers/JuegoController');

// End-points CRUD juegos
router.get('/', JuegoController.getAll);
router.get('/:id', JuegoController.getById);
router.get('/name/:title', JuegoController.getByTitle);
router.post('/', JuegoController.create);
router.put('/:id', JuegoController.update);
router.delete('/', JuegoController.deleteAll);
router.delete('/:id', JuegoController.delete);

module.exports = router;