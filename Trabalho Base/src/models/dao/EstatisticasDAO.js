const Estatisticas = require("../estatistica");

let estatisticas = [
  new Estatisticas({ id: 1, pontuacao: 0, jogosJogados: 44, jogosVencidos: 28, jogosPerdidos: 16 }),
  new Estatisticas({ id: 2, pontuacao: 0, jogosJogados: 52, jogosVencidos: 23, jogosPerdidos: 29 }),
  new Estatisticas({ id: 3, pontuacao: 0, jogosJogados: 37, jogosVencidos: 11, jogosPerdidos: 26 }),
  new Estatisticas({ id: 4, pontuacao: 0, jogosJogados: 31, jogosVencidos: 12, jogosPerdidos: 19 }),
  new Estatisticas({ id: 5, pontuacao: 0, jogosJogados: 52, jogosVencidos: 23, jogosPerdidos: 29 }),
  new Estatisticas({ id: 6, pontuacao: 0, jogosJogados: 38, jogosVencidos: 18, jogosPerdidos: 20 }),
  new Estatisticas({ id: 7, pontuacao: 0, jogosJogados: 45, jogosVencidos: 22, jogosPerdidos: 23 }),
  new Estatisticas({ id: 8, pontuacao: 0, jogosJogados: 49, jogosVencidos: 27, jogosPerdidos: 22 }),
  new Estatisticas({ id: 9, pontuacao: 0, jogosJogados: 57, jogosVencidos: 29, jogosPerdidos: 28 }),
  new Estatisticas({ id: 10, pontuacao: 0, jogosJogados: 41, jogosVencidos: 21, jogosPerdidos: 20 }),
  new Estatisticas({ id: 11, pontuacao: 0, jogosJogados: 41, jogosVencidos: 17, jogosPerdidos: 24 }),
  new Estatisticas({ id: 12, pontuacao: 0, jogosJogados: 37, jogosVencidos: 19, jogosPerdidos: 18 }),
  new Estatisticas({ id: 13, pontuacao: 0, jogosJogados: 32, jogosVencidos: 14, jogosPerdidos: 18 }),
  new Estatisticas({ id: 14, pontuacao: 0, jogosJogados: 36, jogosVencidos: 15, jogosPerdidos: 21 }),
  new Estatisticas({ id: 15, pontuacao: 0, jogosJogados: 34, jogosVencidos: 16, jogosPerdidos: 18 }),
  new Estatisticas({ id: 16, pontuacao: 0, jogosJogados: 39, jogosVencidos: 17, jogosPerdidos: 22 }),
  new Estatisticas({ id: 17, pontuacao: 0, jogosJogados: 52, jogosVencidos: 24, jogosPerdidos: 28 }),
  new Estatisticas({ id: 18, pontuacao: 0, jogosJogados: 47, jogosVencidos: 19, jogosPerdidos: 28 }),
  new Estatisticas({ id: 19, pontuacao: 0, jogosJogados: 30, jogosVencidos: 11, jogosPerdidos: 19 }),
  new Estatisticas({ id: 20, pontuacao: 0, jogosJogados: 42, jogosVencidos: 20, jogosPerdidos: 22 })
];

class EstatisticasDAO {
  // Retorna a lista de estatisticas
  listar() {
    return estatisticas;
  }

  // Retorna uma estatistica filtrado pela sua id
  buscarPorId(id) {
    return estatisticas.find(estatistica => estatistica.id === id);
  }

  // Verifica se existe uma instância de estatisticas com aquele id
  exist(id) {
    return this.buscarPorId(id) ? true : false;
  }

  // Cria e armazena uma nova estatistica
  criar(estatistica) {
    estatistica.id = estatisticas[estatisticas.length - 1].id + 1;
    estatisticas.push(estatistica);
    return parseInt(estatistica.id);
  }

  // Atualiza uma estatistica
  atualizar(id, estatisticaAtualizado) {
    const index = estatisticas.findIndex(estatistica => estatistica.id === id);
    if (index !== -1) {
      estatisticas[index] = estatisticaAtualizado;
    }
  }

  // Deleta um estatistica
  deletar(id) {
    const index = estatisticas.findIndex(estatistica => estatistica.id === id);
    if (index !== -1) {
      estatisticas.splice(index, 1);
    }
  }
}

module.exports = new EstatisticasDAO();
