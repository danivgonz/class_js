class ListaConsultas {
    constructor() {
        this._consultas = [];
    }

    adiciona(consulta) {
        this._consultas.push(consulta);
    }

    get consultas() {
        // [].concat => segurança
        return [].concat(this._consultas);
    }
}