import { Negociacao } from "./index";

export class Negociacoes {
  private _negociacoes: Negociacao[] = [];

  adiciona(negociacao: Negociacao) {
    this._negociacoes.push(negociacao);
  }

  paraArray(): Negociacao[] {
    return [...this._negociacoes];
  }
}
