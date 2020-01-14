class DateHelper {
    constructor(){
        // Não pode instanciar Helper
        throw new Error('Not today!')
    }

    static textoParaData(texto) {
        if(!/^\d{4}-\d{2}-\d{2}$/.test(texto))
            throw new Error('A data deve estar no formato yyyy-mm-dd.')

        return new Date(...texto
            .split('-')
            .map((item, idx) => item - (idx % 2))
            );
            
    }

    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`; 
    }
}