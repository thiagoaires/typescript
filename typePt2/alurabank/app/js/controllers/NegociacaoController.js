System.register(["../models/index", "../views/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, NegociacaoController, DiaDaSemana;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_1.Negociacoes();
                    this._negociacoesView = new index_2.NegociacoesView("#NegociacoesView");
                    this._mensagemView = new index_2.MensagemView("#mensagemView");
                    this._inputData = document.querySelector("#data");
                    this._inputQtde = document.querySelector("#quantidade");
                    this._inputValor = document.querySelector("#valor");
                    this._negociacoesView.update(this._negociacoes);
                }
                adiciona(e) {
                    e.preventDefault();
                    const data = new Date(this._inputData.value.replace(/-/g, ","));
                    if (!this._diaUtil(data)) {
                        this._mensagemView.update("Nao operamos no fim de semana");
                        return;
                    }
                    const negociacao = new index_1.Negociacao(data, parseInt(this._inputQtde.value), parseFloat(this._inputValor.value));
                    this._negociacoes.adiciona(negociacao);
                    this._negociacoes.paraArray().length = 0;
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update("Negociacao adicionada com sucesso");
                }
                _diaUtil(date) {
                    return (date.getDay() != DiaDaSemana.Domingo ||
                        date.getDay() != DiaDaSemana.Sábado);
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
            (function (DiaDaSemana) {
                DiaDaSemana[DiaDaSemana["Domingo"] = 0] = "Domingo";
                DiaDaSemana[DiaDaSemana["Segunda"] = 1] = "Segunda";
                DiaDaSemana[DiaDaSemana["Ter\u00E7a"] = 2] = "Ter\u00E7a";
                DiaDaSemana[DiaDaSemana["Quarta"] = 3] = "Quarta";
                DiaDaSemana[DiaDaSemana["Quinta"] = 4] = "Quinta";
                DiaDaSemana[DiaDaSemana["Sexta"] = 5] = "Sexta";
                DiaDaSemana[DiaDaSemana["S\u00E1bado"] = 6] = "S\u00E1bado";
            })(DiaDaSemana || (DiaDaSemana = {}));
        }
    };
});
