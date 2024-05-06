const Partida = require("../models/partida");
const PartidaDAO = require('../models/dao/partidasDAO');

class PartidasController {
  // Cria uma nova partida (CREATE)
  create(req, res) {
    let timeVencedor = req.body.timeVencedor;
    let timePerdedor = req.body.timePerdedor;
    let mvp = req.body.mvp;

    let partida = new Partida({ timeVencedor, timePerdedor, mvp });
    let partidaId = PartidaDAO.criar(partida);

    // Faz o response para o navegador
    if (partidaId)
      res.status(201).json({ partida: PartidaDAO.buscarPorId(partidaId) });
    else
      res.status(500).json({ message: "Não foi possível criar uma partida" });
  }

  // Lista todas as partidas (READ)
  list(req, res) {
    let listaPartidas = PartidaDAO.listar();

    // Faz o response para o navegador
    if (listaPartidas.length === 0)
      res.status(200).json({ message: "Nenhuma partida encontrada" });
    else
      res.status(200).json({ partidas: listaPartidas });
  }

  // Mostra uma partida pelo ID (READ)
  show(req, res) {
    let id = req.params.id;
    let partida = PartidaDAO.buscarPorId(parseInt(id));

    // Faz o response para o navegador
    if (partida)
      res.status(200).json({ partida: partida });
    else
      res.status(404).json({ message: 'Partida não encontrada' });
  }

  // Atualiza uma partida (UPDATE)
  update(req, res) {
    let id = req.params.id;
    let partida = PartidaDAO.buscarPorId(parseInt(id));
    
    // Se a partida existir
    if (partida) {
      // Atualiza os campos, se fornecidos
      if (req.body.timeVencedor) partida.timeVencedor = req.body.timeVencedor;
      if (req.body.timePerdedor) partida.timePerdedor = req.body.timePerdedor;
      if (req.body.mvp) partida.mvp = req.body.mvp;

      // Atualiza a partida na persistência
      PartidaDAO.atualizar(id, partida);

      // Faz o response para o navegador
      res.status(200).json({ partida: partida });
    } else {
      // Se a partida não existir, retorna erro 404
      res.status(404).json({ message: 'Partida não encontrada' });
    }
  }

  // Deleta uma partida (DELETE)
  delete(req, res) {
    let id = parseInt(req.params.id);

    // Verifica se a partida existe
    if (PartidaDAO.exist(id)) {
      // Deleta a partida
      PartidaDAO.deletar(id);

      // Faz o response para o navegador
      res.status(200).send();
    } else {
      // Se a partida não existir, retorna erro 404
      res.status(404).json({ message: 'Partida não encontrada' });
    }
  }
}

module.exports = new PartidasController();
