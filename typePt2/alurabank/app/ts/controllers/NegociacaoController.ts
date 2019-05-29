import { Negociacoes, Negociacao } from "../models/index";
import { MensagemView, NegociacoesView } from "../views/index";
import { logarTempoDeExecucao } from "../helpers/decorators/logarTempoDeExecucao";

export class NegociacaoController {
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
  @logarTempoDeExecucao()
  adiciona(e: Event) {
    e.preventDefault();

    const data = new Date(this._inputData.value.replace(/-/g, ","));

    if (!this._diaUtil(data)) {
      this._mensagemView.update("Nao operamos no fim de semana");
      return;
    }

    const negociacao = new Negociacao(
      data,
      parseInt(this._inputQtde.value),
      parseFloat(this._inputValor.value)
    );

    this._negociacoes.adiciona(negociacao);
    this._negociacoes.paraArray().length = 0;
    this._negociacoesView.update(this._negociacoes);
    this._mensagemView.update("Negociacao adicionada com sucesso");
  }

  private _diaUtil(date: Date) {
    return (
      date.getDay() != DiaDaSemana.Domingo ||
      date.getDay() != DiaDaSemana.Sábado
    );
  }
}

enum DiaDaSemana {
  Domingo,
  Segunda,
  Terça,
  Quarta,
  Quinta,
  Sexta,
  Sábado
}
