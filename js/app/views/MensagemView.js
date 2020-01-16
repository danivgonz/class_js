class MensagemView extends View {
    constructor(elemento) {
        super(elemento);
    }

    atualiza(modelo, tipo='info'){
        this._elemento.innerHTML = this._template(modelo, tipo);

        setTimeout( _ => 
            this._elemento.innerHTML = this._template(new Mensagem(), 'info')
            , 2000);
    }

    _template(modelo, tipo) {
        return modelo.texto ? `<div class="alert alert-${tipo}">${modelo.texto}</div>`
               : '';
    }
}
