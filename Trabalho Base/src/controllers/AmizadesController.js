const amizade = require("../models/amizade")
const AmizadesDAO = require('../models/dao/AmizadesDAO');

class AmizadeController {
    // Cria uma nova amizade (CREATE)
    create(req, res) {
      // Verifique se os IDs dos amigos foram fornecidos no corpo da solicitação
      const { idAmigo1, idAmigo2 } = req.body;
      if (!idAmigo1 || !idAmigo2) {
        return res.status(400).json({ message: "IDs de amigos não fornecidos" });
      }
  
      // Verifique se os jogadores com os IDs fornecidos existem
      const jogador1 = JogadoresDAO.buscarPorId(idAmigo1);
      const jogador2 = JogadoresDAO.buscarPorId(idAmigo2);
      if (!jogador1 || !jogador2) {
        return res.status(404).json({ message: "Um ou ambos os jogadores não encontrados" });
      }
  
      // Crie uma nova instância de amizade
      const amizade = new Amizade({ amigos: [jogador1, jogador2] });
  
      // Salve a amizade no banco de dados
      const amizadeId = AmizadeDAO.criar(amizade);
  
      // Responda com os detalhes da amizade criada
      if (amizadeId) {
        res.status(201).json({ amizade: AmizadeDAO.buscarPorId(amizadeId) });
      } else {
        res.status(500).json({ message: "Não foi possível criar a amizade" });
      }
    }
  
    // Lista todas as amizades (READ)
    list(req, res) {
      const amizades = AmizadesDAO.listar();
  
      // Responda com a lista de amizades
      res.status(200).json({ amizades });
    }
  
    // Mostrar uma amizade (READ)
    show(req, res) {
      const id = req.params.id;
      const amizade = AmizadesDAO.buscarPorId(id);
  
      if (amizade) {
        res.status(200).json({ amizade });
      } else {
        res.status(404).json({ message: 'Amizade não encontrada' });
      }
    }
  
    // Atualizar uma amizade (UPDATE)
    update(req, res) {
      const id = req.params.id;
      const amizadeAtualizada = req.body;
  
      // Verifique se a amizade existe
      const amizadeExistente = AmizadeDAO.buscarPorId(id);
      if (!amizadeExistente) {
        return res.status(404).json({ message: "Amizade não encontrada" });
      }
  
      // Atualize a amizade no banco de dados
      AmizadeDAO.atualizar(id, amizadeAtualizada);
  
      // Responda com os detalhes da amizade atualizada
      res.status(200).json({ amizade: AmizadeDAO.buscarPorId(id) });
    }
  
    // Deletar uma amizade (DELETE)
    delete(req, res) {
      const id = req.params.id;
  
      // Verifique se a amizade existe
      const amizadeExistente = AmizadeDAO.buscarPorId(id);
      if (!amizadeExistente) {
        return res.status(404).json({ message: "Amizade não encontrada" });
      }
  
      // Deleta a amizade do banco de dados
      AmizadeDAO.deletar(id);
  
      // Responda com uma mensagem indicando que a amizade foi deletada com sucesso
      res.status(200).json({ message: "Amizade deletada com sucesso" });
    }
  }
  
  module.exports = new AmizadeController();