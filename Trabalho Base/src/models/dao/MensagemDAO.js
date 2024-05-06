const Mensagem = require("../mensagem");

// Vetor de Mensagens
let mensagens = [];

class MensagemDAO {
  // Retorna a lista de mensagens
  listar() {
    return mensagens;
  }

  // Retorna uma mensagem filtrada pela sua ID
  buscarPorId(id) {
    return mensagens.find(mensagem => mensagem.id === id);
  }

  // Cria e armazena uma nova mensagem
  criar(mensagem) {
    mensagem.id = mensagens.length + 1;
    mensagens.push(mensagem);
    return mensagem.id;
  }

  // Atualiza uma mensagem
  atualizar(id, mensagemAtualizada) {
    const index = mensagens.findIndex(mensagem => mensagem.id === id);
    if (index !== -1) {
      mensagens[index] = mensagemAtualizada;
    }
  }

  // Deleta uma mensagem
  deletar(id) {
    const index = mensagens.findIndex(mensagem => mensagem.id === id);
    if (index !== -1) {
      mensagens.splice(index, 1);
    }
  }

  // Filtra e retorna todas as mensagens enviadas por um remetente específico
  listarPorRemetente(remetenteId) {
    return mensagens.filter(mensagem => mensagem.remetenteId === remetenteId);
  }

  // Filtra e retorna todas as mensagens destinadas a um destinatário específico
  listarPorDestinatario(destinatarioId) {
    return mensagens.filter(mensagem => mensagem.destinatarioId === destinatarioId);
  }
}

module.exports = new MensagemDAO();
