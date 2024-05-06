class Partidas {
    constructor({ id, timeVencedor, timePerdedor, mvp }) {
        this.id = id ? id : -1;
        this.timeVencedor = timeVencedor ? timeVencedor : [];
        this.timePerdedor = timePerdedor ? timePerdedor : [];
        this.mvp = mvp ? mvp : -1;
    }
}

module.exports = Partidas;
