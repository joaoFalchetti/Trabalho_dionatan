class Estatisticas {
  constructor({ id, pontuacao, jogosJogados, jogosVencidos, jogosPerdidos }) {
      this.id = id ? id : -1;
      this.pontuacao = pontuacao ? pontuacao : 0;
      this.jogosJogados = jogosJogados ? jogosJogados : 0;
      this.jogosVencidos = jogosVencidos ? jogosVencidos : 0;
      this.jogosPerdidos = jogosPerdidos ? jogosPerdidos : 0;
  }

  // Função chamada quando o jogador que pertence a esta estatística vence uma partida
  partidaGanha() {
      this.jogosVencidos++;
      this.calculaEstatistica();
  }

  // Função chamada quando o jogador que pertence a esta estatística perde uma partida
  partidaPerdida() {
      this.jogosPerdidos++;
      this.calculaEstatistica();
  }

  // Calcula a pontuação e os jogos jogados da estatística
  calculaEstatistica() {
      // Calcula a pontuação
      this.pontuacao = this.jogosVencidos * 10 - this.jogosPerdidos * 5;

      // Garante que a pontuação não seja menor que 0
      if (this.pontuacao < 0) {
          this.pontuacao = 0;
      }

      // Calcula os jogos jogados
      this.jogosJogados = this.jogosPerdidos + this.jogosVencidos;
  }
}

module.exports = Estatisticas;

