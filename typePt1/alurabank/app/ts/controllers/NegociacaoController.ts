class NegociacaoController {
  private _inputData: HTMLInputElement;
  private _inputQtde: HTMLInputElement;
  private _inputValor: HTMLInputElement;
  private _negociacoes = new Negociacoes();
  private _negociacoesView = new NegociacoesView("#NegociacoesView");
  private _mensagemView = new MensagemView("#mensagemView");

  constructor() {
    this._inputData = <HTMLInputElement>document.querySelector("#data");
    this._inputQtde = <HTMLInputElement>document.querySelector("#quantidade");
    this._inputValor = <HTMLInputElement>document.querySelector("#valor");
    this._negociacoesView.update(this._negociacoes);
  }

  adiciona(e: Event) {
    e.preventDefault();

    const negociacao = new Negociacao(
      new Date(this._inputData.value.replace(/-/g, ",")),
      parseInt(this._inputQtde.value),
      parseFloat(this._inputValor.value)
    );

    this._negociacoes.adiciona(negociacao);
    this._negociacoes.paraArray().length = 0;
    this._negociacoesView.update(this._negociacoes);
    this._mensagemView.update("Negociacao adicionada com sucesso");
  }
}
