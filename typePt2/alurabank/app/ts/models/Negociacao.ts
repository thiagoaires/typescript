export class Negociacao {
  constructor(
    readonly data: Date,
    readonly qtde: number,
    readonly valor: number
  ) {}

  get volume() {
    return this.qtde * this.valor;
  }
}
