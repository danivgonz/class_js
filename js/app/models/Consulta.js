class Consulta {
    constructor(nome, data, peso, altura) {
        this._nome   = nome
        this._data   = new Date(data.getTime());
        this._peso   = peso;
        this._altura = altura;
        // Impede que o usuário altere o valor no objeto.
        Object.freeze(this);
    }

    // GET's
    get imc() {
        return (this.peso / (this.altura**2)).toFixed(2);
    }

    get nome(){
        return this._nome;
    }
    get data(){
        return new Date(this._data.getTime());
    }
    get peso(){
        return this._peso;
    }
    get altura(){
        return this._altura;
    }
}