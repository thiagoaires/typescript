class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView("#NegociacoesView");
        this._mensagemView = new MensagemView("#mensagemView");
        this._inputData = document.querySelector("#data");
        this._inputQtde = document.querySelector("#quantidade");
        this._inputValor = document.querySelector("#valor");
        this._negociacoesView.update(this._negociacoes);
    }
    adiciona(e) {
        e.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ",")), parseInt(this._inputQtde.value), parseFloat(this._inputValor.value));
        this._negociacoes.adiciona(negociacao);
        this._negociacoes.paraArray().length = 0;
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update("Negociacao adicionada com sucesso");
    }
}
