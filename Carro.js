"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Veiculo_1 = require("./Veiculo");
class Carro extends Veiculo_1.Veiculo {
    virar() {
        console.log("Carro virando");
    }
    trocarDeMarcha() {
        console.log("Trocar a marcha do carro");
    }
    freiar() {
        console.log("Freiar o carro");
    }
}
exports.Carro = Carro;
