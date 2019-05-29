System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Negociacao;
    return {
        setters: [],
        execute: function () {
            Negociacao = class Negociacao {
                constructor(data, qtde, valor) {
                    this.data = data;
                    this.qtde = qtde;
                    this.valor = valor;
                }
                get volume() {
                    return this.qtde * this.valor;
                }
            };
            exports_1("Negociacao", Negociacao);
        }
    };
});
