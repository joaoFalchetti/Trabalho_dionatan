module.exports = Mensagem;
class Mensagem {
    constructor({ id, texto, remetenteId, destinatarioId }) {
        this.id = id ? id : -1;
        this.texto = texto ? texto : "";
        this.remetenteId = remetenteId ? remetenteId : -1;
        this.destinatarioId = destinatarioId ? destinatarioId : -1;
        this.dataHora = new Date(); // Registro da data e hora atuais
    }
}

module.exports = Mensagem;
