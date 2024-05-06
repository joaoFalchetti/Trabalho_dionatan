const Amizade = require("../amizade");

// Vetor de Amizades
const amizades = [
    { amigos: [jogadores[0], jogadores[1], jogadores[2]] },
    { amigos: [jogadores[3], jogadores[4]] },
    { amigos: [jogadores[5], jogadores[6], jogadores[7]] },
    { amigos: [jogadores[8], jogadores[9]] },
    { amigos: [jogadores[10], jogadores[11], jogadores[12]] },
    { amigos: [jogadores[13], jogadores[14]] },
    { amigos: [jogadores[15], jogadores[16], jogadores[17]] },
    { amigos: [jogadores[18], jogadores[19]] }
];


class AmizadeDAO {
  // Retorna a lista de amizades
  listar() {
    return amizades;
  }

  // Retorna uma amizade filtrada pelo seu ID
  buscarPorId(id) {
    return amizades.find(amizade => amizade.id === id);
  }

  // Cria e armazena uma nova amizade
  criar(amizade) {
    amizade.id = amizades.length + 1;
    amizades.push(amizade);
    return amizade.id;
  }

  // Atualiza uma amizade
  atualizar(id, amizadeAtualizada) {
    const index = amizades.findIndex(amizade => amizade.id === id);
    if (index !== -1) {
      amizades[index] = amizadeAtualizada;
    }
  }

  // Deleta uma amizade
  deletar(id) {
    const index = amizades.findIndex(amizade => amizade.id === id);
    if (index !== -1) {
      amizades.splice(index, 1);
    }
  }
}

module.exports = new AmizadeDAO();
module.exports = new AmizadeDAO();
