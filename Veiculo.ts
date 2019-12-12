export class Veiculo{
  

    private _placa: string;

   
    private _modelo: string;

   
    private _ano: number;

    
    private _cor: string; 
    

    public get placa(): string {
        return this._placa;
    }
    public set placa(value: string) {
        this._placa = value;
    }

    public get modelo(): string {
        return this._modelo;
    }
    public set modelo(value: string) {
        this._modelo = value;
    }

    public get ano(): number {
        return this._ano;
    }
    public set ano(value: number) {
        this._ano = value;
    }

    public get cor(): string {
        return this._cor;
    }
    public set cor(value: string) {
        this._cor = value;
    }
}