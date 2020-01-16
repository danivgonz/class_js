class ListaConsultas {
    constructor(contexto, armadilha) {
        this._consultas = [];
        this._contexto = contexto;
        this._armadilha = armadilha;
    }

    adiciona(consulta) {
        this._consultas.push(consulta);
        // Usando Arrow function no controller, usa esse
        // this._armadilha(this);
        // Usando Function no controlles, usa esse
        Reflect.apply(this._armadilha, this._contexto, [this]);
    }

    get consultas() {
        // [].concat => segurança
        return [].concat(this._consultas);
    }
}