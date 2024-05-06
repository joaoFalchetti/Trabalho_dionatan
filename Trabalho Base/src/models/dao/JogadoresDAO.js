const Jogador = require("../jogador")

// Vetor de Jogadores
let jogadores = [
  new Jogador({ id: 1, nome: "João Silva", nickName: "joao.silva", classificacao: 0, estatisticas: 1, conquistas: [1, 2, 3] }),
  new Jogador({ id: 2, nome: "Pedro Santos", nickName: "pedro123", classificacao: 0, estatisticas: 2, conquistas: [5] }),
  new Jogador({ id: 3, nome: "Maria Oliveira", nickName: "maria_o", classificacao: 0, estatisticas: 3, conquistas: [4] }),
  new Jogador({ id: 4, nome: "Ana Souza", nickName: "ana_gamer", classificacao: 0, estatisticas: 4, conquistas: [3, 5] }),
  new Jogador({ id: 5, nome: "Lucas Ferreira", nickName: "lukinhas", classificacao: 0, estatisticas: 5, conquistas: [1, 5] }),
  new Jogador({ id: 6, nome: "Fernanda Lima", nickName: "fer_lima", classificacao: 0, estatisticas: 6, conquistas: [2, 4] }),
  new Jogador({ id: 7, nome: "Gabriel Almeida", nickName: "gabe99", classificacao: 0, estatisticas: 7, conquistas: [3] }),
  new Jogador({ id: 8, nome: "Carolina Costa", nickName: "carolcosta", classificacao: 0, estatisticas: 8, conquistas: [1, 2] }),
  new Jogador({ id: 9, nome: "Rafael Oliveira", nickName: "rafa_gamer", classificacao: 0, estatisticas: 9, conquistas: [4, 5] }),
  new Jogador({ id: 10, nome: "Juliana Santos", nickName: "juju_play", classificacao: 0, estatisticas: 10, conquistas: [2, 3] }),
  new Jogador({ id: 11, nome: "Mateus Pereira", nickName: "matt_play", classificacao: 0, estatisticas: 11, conquistas: [1, 4] }),
  new Jogador({ id: 12, nome: "Luiza Martins", nickName: "lu_mart", classificacao: 0, estatisticas: 12, conquistas: [3, 5] }),
  new Jogador({ id: 13, nome: "Daniel Ferreira", nickName: "danny_gamer", classificacao: 0, estatisticas: 13, conquistas: [2] }),
  new Jogador({ id: 14, nome: "Patrícia Souza", nickName: "patty_play", classificacao: 0, estatisticas: 14, conquistas: [4, 5] }),
  new Jogador({ id: 15, nome: "Marcos Silva", nickName: "marcos_gamer", classificacao: 0, estatisticas: 15, conquistas: [1, 3] }),
  new Jogador({ id: 16, nome: "Camila Oliveira", nickName: "camilinha", classificacao: 0, estatisticas: 16, conquistas: [2, 4] }),
  new Jogador({ id: 17, nome: "Guilherme Santos", nickName: "gui_gamer", classificacao: 0, estatisticas: 17, conquistas: [3, 5] }),
  new Jogador({ id: 18, nome: "Isabela Lima", nickName: "isa_play", classificacao: 0, estatisticas: 18, conquistas: [1, 2] }),
  new Jogador({ id: 19, nome: "Thiago Costa", nickName: "thi_gamer", classificacao: 0, estatisticas: 19, conquistas: [4] }),
  new Jogador({ id: 20, nome: "Amanda Pereira", nickName: "amandinha", classificacao: 0, estatisticas: 20, conquistas: [2, 3] })
];


class JogadoresDAO {
  // Retorna a lista de jogadores
  listar() {
    return jogadores;
  }

  // Retorna um jogador filtrado peloa sua ID
  buscarPorId(id) {
    return jogadores.find(jogador => jogador.id === id);
  }

  // Verifica existe uma instância de jogadores com aquele id
  exist(id) {
    return this.buscarPorId(id) ? true : false;
  }

  // Cria e armazena um novo jogador
  criar(jogador) {
    jogador.id = jogadores[jogadores.length - 1].id + 1;
    jogadores.push(jogador);
    return parseInt(jogador.id);
  }

  // Atualiza um jogador
  atualizar(id, jogadorAtualizado) {
    const index = jogadores.findIndex(jogador => jogador.id === id);
    if (index !== -1) {
      jogadores[index] = jogadorAtualizado;
    }
  }

  // Deleta um jogador
  deletar(id) {
    const index = jogadores.findIndex(jogador => jogador.id === id);
    if (index !== -1) {
      jogadores.splice(index, 1);
    }
  }
}

module.exports = new JogadoresDAO();
