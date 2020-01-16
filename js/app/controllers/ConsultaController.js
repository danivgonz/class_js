class ConsultaController {
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputNome      = $('#nome');
        this._inputData      = $('#data');
        this._inputPeso      = $('#peso');
        this._inputAltura    = $('#altura');

        this._consultaView   = new ConsultaView($('#consultaView'));
        
        // Usando Arrow function
        // this._listaConsultas = new ListaConsultas(model => 
        //     this._consultaView.atualiza(model))
        // Usando function
        this._listaConsultas = new ListaConsultas(this, function(model) {
            this._consultaView.atualiza(model)
        })

        this._mensagem       = new Mensagem();
        this._mensagemView   = new MensagemView($('#mensagemView'));
        this._mensagemView.atualiza(this._mensagem);
    }

    adiciona(e) {
        e.preventDefault(); 

        this._listaConsultas.adiciona(this._criaConsulta());
        this._mensagem.texto = 'Consulta inserida com sucesso!';
        this._mensagemView.atualiza(this._mensagem, 'success');
        this._limpaFormulario();
    }

    limpa(e) {
        e.preventDefault();
        this._limpaFormulario();
    }

    _criaConsulta() {
        return new Consulta(
            this._inputNome.value,
            DateHelper.textoParaData(this._inputData.value),
            this._inputPeso.value,
            this._inputAltura.value
        )
    }

    _limpaFormulario() {
        this._inputNome.value = '';
        this._inputData.value = '';
        this._inputPeso.value = '';
        this._inputAltura.value = '';

        this._inputNome.focus();
    }
}