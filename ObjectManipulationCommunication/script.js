class TvSamsung {
    #brand = "Samsung";
    #connect

    constructor(brand, connect){
        this.#brand = brand;
        this.#connect = connect;
    }

    getBrand(){
        return this.#brand;
    }

    setBrand(brand){
        this.#brand = brand;
    }

    
    getConnect(){
        return this.#connect;
    }

    setConnect(connect){
        this.#connect = connect;
    }

    toConnectTv(brand){
        if(brand == this.getBrand()){
            this.setConnect(true);
            return "Tv Ligada";
        }
        
        return `O controle da marca ${brand} não consegue ligar essa TV`;
    }

    toOffTv(brand){
        if(brand === this.getBrand()){
            this.setConnect(false);
            return "Tv Desligada";
        }

        return `O controle da marca ${brand} não consegue desligar essa TV`;
    }
}

class TvLg extends TvSamsung{
    constructor(){
        super("LG");
    }
}

