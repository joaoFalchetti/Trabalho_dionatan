const express = require('express');
const router = express.Router();
const amizadeController = require('../controllers/AmizadeController');

// Rota para adicionar um amigo (CREATE)
router.post('/', amizadeController.adicionarAmigo);

// Rota para remover um amigo (DELETE)
router.delete('/:id', amizadeController.removerAmigo);

// Rota para listar amigos de um jogador (READ)
router.get('/:id/amigos', amizadeController.listarAmigos);

module.exports = router;
