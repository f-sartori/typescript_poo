"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Veiculo_1 = require("./Veiculo");
class Moto extends Veiculo_1.Veiculo {
    trocarDeMarcha() {
        console.log("Trocando marcha da moto");
    }
    freiar() {
        console.log("Freiando a moto");
    }
}
exports.Moto = Moto;
