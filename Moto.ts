import { Veiculo } from "./Veiculo";

export class Moto extends Veiculo implements Cambio{

    trocarDeMarcha() {
        console.log("Trocando marcha da moto");
    }    
    
    freiar() {
        console.log("Freiando a moto");
    }



}