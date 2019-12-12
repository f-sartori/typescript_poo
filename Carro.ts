import { Veiculo } from "./Veiculo";

export class Carro extends Veiculo implements Cambio, Direcao{

    
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