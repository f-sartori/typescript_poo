"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Veiculo {
    get placa() {
        return this._placa;
    }
    set placa(value) {
        this._placa = value;
    }
    get modelo() {
        return this._modelo;
    }
    set modelo(value) {
        this._modelo = value;
    }
    get ano() {
        return this._ano;
    }
    set ano(value) {
        this._ano = value;
    }
    get cor() {
        return this._cor;
    }
    set cor(value) {
        this._cor = value;
    }
}
exports.Veiculo = Veiculo;
