import { Veiculo } from "./Veiculo";
import { Carro } from "./Carro";
import { Moto } from './Moto';

//var carro: Carro = new Veiculo();

var carro = new Carro();
var moto = new Moto();

//var carro: Veiculo = new Carro();

carro.placa = 'Placa carro';
carro.modelo = "Modelo carro";
carro.ano = 1900;
carro.cor = "Vermelho";

console.log(carro);
carro.trocarDeMarcha();
carro.freiar();
carro.virar();


moto.placa = "Placa moto";
moto.modelo = "Modelo moto";
moto.ano = 2000;
moto.cor = "Azul";

console.log(moto);
moto.trocarDeMarcha();
moto.freiar();

