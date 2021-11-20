const express = require('express');
const router = express.Router();

//Importo modelo de datos
const PedidoController = require('../controllers/PedidoController');

// End-points CRUD juegos
router.get('/', PedidoController.getAll);
// router.get('/:id', PedidoController.getById);
// router.get('/type/:type', PedidoController.getByType);
router.post('/', PedidoController.create);
// router.put('/:id', PedidoController.update);
// router.delete('/', PedidoController.deleteAll);
router.delete('/:id', PedidoController.delete);

module.exports = router;