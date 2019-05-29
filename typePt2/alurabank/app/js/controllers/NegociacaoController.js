System.register(["../models/index", "../views/index", "../helpers/decorators/logarTempoDeExecucao"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, logarTempoDeExecucao_1, NegociacaoController, DiaDaSemana;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (logarTempoDeExecucao_1_1) {
                logarTempoDeExecucao_1 = logarTempoDeExecucao_1_1;
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
            __decorate([
                logarTempoDeExecucao_1.logarTempoDeExecucao()
            ], NegociacaoController.prototype, "adiciona", null);
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
