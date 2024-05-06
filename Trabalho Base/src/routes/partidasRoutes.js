const express = require('express');
const router = express.Router();
const partidasController = require('../controllers/PartidasController');

// Rota para criar uma nova partida (CREATE)
router.post('/', partidasController.create);

// Rota para listar todas as partidas (READ)
router.get('/', partidasController.list);

// Rota para mostrar uma partida pelo ID (READ)
router.get('/:id', partidasController.show);

// Rota para atualizar uma partida (UPDATE)
router.put('/:id', partidasController.update);

// Rota para deletar uma partida (DELETE)
router.delete('/:id', partidasController.delete);

module.exports = router;
