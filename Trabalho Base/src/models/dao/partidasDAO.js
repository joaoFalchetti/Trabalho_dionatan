const Partida = require("../partida");

// Vetor de Partidas
let partidas = [];

class PartidasDAO {
  // Retorna a lista de partidas
  listar() {
    return partidas;
  }

  // Retorna uma partida filtrada pela sua ID
  buscarPorId(id) {
    return partidas.find(partida => partida.id === id);
  }

  // Cria e armazena uma nova partida
  criar(partida) {
    partida.id = partidas.length + 1;
    partidas.push(partida);
    return partida.id;
  }

  // Atualiza uma partida
  atualizar(id, partidaAtualizada) {
    const index = partidas.findIndex(partida => partida.id === id);
    if (index !== -1) {
      partidas[index] = partidaAtualizada;
    }
  }

  // Deleta uma partida
  deletar(id) {
    const index = partidas.findIndex(partida => partida.id === id);
    if (index !== -1) {
      partidas.splice(index, 1);
    }
  }
}

module.exports = new PartidasDAO();
