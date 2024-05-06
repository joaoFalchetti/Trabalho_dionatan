const Estatistica = require("../models/estatistica");
const EstatisticasDAO = require('../models/dao/EstatisticasDAO');
const ConquistasDAO = require('../models/dao/ConquistasDAO');

class Jogador {
  constructor({ id, nickName, nome, classificacao, estatisticas, conquistas }) {
    this.id = id ? id : -1;
    this.nickName = nickName;
    this.nome = nome;
    this.classificacao = classificacao ? classificacao : -1;
    this.estatisticas = estatisticas ? estatisticas : EstatisticasDAO.criar(new Estatistica({}));
    this.conquistas = conquistas ? conquistas : {};
    this.amigos = []; // Array para armazenar os amigos do jogador
  }

  // Adiciona um amigo à lista de amigos do jogador
  adicionarAmigo(amigo) {
    if (!this.amigos.includes(amigo)) {
      this.amigos.push(amigo);
    }
  }

  // Verifica se o jogador é amigo de outro jogador
  verificarAmizade(jogador) {
    return this.amigos.includes(jogador);
  }

  // Lista os amigos do jogador
  listarAmigos() {
    return this.amigos.map(amigo => amigo.principal());
  }

  // Restante dos métodos da classe...
}

module.exports = Jogador;