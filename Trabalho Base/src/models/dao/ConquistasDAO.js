const Conquista = require("../conquista");

// Vetor de Conquistas
let conquistas = [
  new Conquista({ id: 1, nome: "Caçador de Monstros", descricao: "Elimine 5 monstros em uma única caçada" }),
  new Conquista({ id: 2, nome: "Explorador Intrépido", descricao: "Explore todas as regiões do mapa sem ser detectado" }),
  new Conquista({ id: 3, nome: "Mestre da Sobrevivência", descricao: "Sobreviva por 30 dias seguidos na selva sem ajuda externa" }),
  new Conquista({ id: 4, nome: "Traidor Exposto", descricao: "Revele a identidade do traidor entre os sobreviventes em um jogo multiplayer" }),
  new Conquista({ id: 5, nome: "Campeão da Arena", descricao: "Vença 10 partidas consecutivas na arena de gladiadores" }),
  new Conquista({ id: 6, nome: "Piloto Ágil", descricao: "Complete um percurso de obstáculos aéreos em menos de 1 minuto" }),
  new Conquista({ id: 7, nome: "Tesouro Escondido", descricao: "Descubra um baú secreto no fundo do mar" }),
  new Conquista({ id: 8, nome: "Domador de Dragões", descricao: "Monte e domine um dragão selvagem" }),
  new Conquista({ id: 9, nome: "Rei da Montanha", descricao: "Chegue ao pico da montanha mais alta do mundo virtual" }),
  new Conquista({ id: 10, nome: "Guardião das Relíquias", descricao: "Proteja uma relíquia sagrada de ser roubada por inimigos" }),
  new Conquista({ id: 11, nome: "Arqueiro Implacável", descricao: "Acerte 100 flechas consecutivas em alvos móveis" }),
  new Conquista({ id: 12, nome: "Mago Supremo", descricao: "Lance com sucesso um feitiço de nível máximo" }),
  new Conquista({ id: 13, nome: "Ladrão das Sombras", descricao: "Roube com sucesso um item valioso de um NPC sem ser detectado" }),
  new Conquista({ id: 14, nome: "Caçador de Recompensas", descricao: "Capture um criminoso procurado vivo e o entregue à autoridade" }),
  new Conquista({ id: 15, nome: "Navegador Intrépido", descricao: "Navegue pelos mares tempestuosos e chegue a uma ilha desconhecida" }),
  new Conquista({ id: 16, nome: "Gladiador Invencível", descricao: "Vença todos os oponentes em uma batalha de gladiadores sem sofrer danos" }),
  new Conquista({ id: 17, nome: "Explorador das Profundezas", descricao: "Mergulhe até o fundo do abismo oceânico e retorne com um tesouro perdido" }),
  new Conquista({ id: 18, nome: "Herói dos Céus", descricao: "Salve uma cidade sitiada do ataque de dragões furiosos" }),
  new Conquista({ id: 19, nome: "Mestre das Poções", descricao: "Crie uma poção poderosa com ingredientes raros e mágicos" }),
  new Conquista({ id: 20, nome: "Domador de Bestas", descricao: "Capture e domine uma besta lendária das terras selvagens" })
];


class ConquistasDAO {
  // Retorna a lista de conquistas
  listar() {
    return conquistas;
  }

  // Retorna um conquista filtrado peloa sua ID
  buscarPorId(id) {
    return conquistas.find(conquista => conquista.id === id);
  }

  // Verifica existe uma instância de conquista com aquele id
  exist(id) {
    return this.buscarPorId(id) ? true : false;
  }

  // Cria e armazena um novo conquista
  criar(conquista) {
    conquista.id = conquistas[conquistas.length - 1].id + 1;
    conquistas.push(conquista);
    return parseInt(conquista.id);
  }

  // Atualiza um conquista
  atualizar(id, conquistaAtualizado) {
    const index = conquistas.findIndex(conquista => conquista.id === id);
    if (index !== -1) {
      conquistas[index] = conquistaAtualizado;
    }
  }

  // Deleta um conquista
  deletar(id) {
    const index = conquistas.findIndex(conquista => conquista.id === id);
    if (index !== -1) {
      conquistas.splice(index, 1);
    }
  }
}

module.exports = new ConquistasDAO();
