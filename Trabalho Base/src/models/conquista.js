
class Conquista {
  constructor({ id, nome, descricao }) {
    this.id = id ? id : -1;
    this.nome = nome;
    this.descricao = descricao;
  }

  // Método para adicionar a conquista a um jogador
  adicionarConquistaAoJogador(jogador) {
    if (!jogador.conquistas.includes(this.id)) {
      jogador.conquistas.push(this.id);
    }
  }

  // Método para remover a conquista de um jogador
  removerConquistaDoJogador(jogador) {
    const index = jogador.conquistas.indexOf(this.id);
    if (index !== -1) {
      jogador.conquistas.splice(index, 1);
    }
  }
}

module.exports = Conquista;
