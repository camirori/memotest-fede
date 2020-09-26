export class JuegoMemotest {
    casilleros={0:undefined,1:undefined,2:undefined,3:undefined,
        4:undefined,5:undefined,6:undefined,7:undefined,
        8:undefined,9:undefined,10:undefined,11:undefined,
        12:undefined,13:undefined,14:undefined,15:undefined,
        16:undefined,17:undefined,18:undefined,19:undefined,
        20:undefined,21:undefined,22:undefined,23:undefined,
        24:undefined,25:undefined,26:undefined,27:undefined,
        28:undefined,29:undefined,30:undefined,31:undefined,
        32:undefined,33:undefined,34:undefined,35:undefined,
        36:undefined,37:undefined,38:undefined,39:undefined,
        40:undefined,41:undefined,42:undefined,43:undefined,
        44:undefined,45:undefined,46:undefined,47:undefined,
        48:undefined,49:undefined,50:undefined,51:undefined,
        52:undefined,53:undefined,54:undefined,55:undefined,                //8x7
    };


    tarjetas={0: false, 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false,
        9: false, 10: false, 11: false, 12: false, 13: false, 14: false, 15: false, 16: false, 17: false,
        18: false, 19: false, 20: false, 21: false, 22: false, 23: false, 24: false, 25: false, 26: false,
        27: false, 28: false, 29: false, 30: false, 31: false, 32: false, 33: false, 34: false, 35: false,
        36: false, 37: false, 38: false, 39: false, 40: false, 41: false, 42: false, 43: false, 44: false,
        45: false, 46: false, 47: false, 48: false, 49: false, 50: false, 51: false, 52: false, 53: false,
        54: false, 55: false
    };

    resultado;      

    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        this.nuevoJuego();
    }

    nuevoJuego(){
        for(let i=0; i<28; i++){         //tarjetas
            for(let j=0; j<2;j++){
                //console.log("Asignando tarjeta"+i +' '+j);
                let casillero;
                do{
                    casillero = Math.floor(Math.random()*56);
                }while(this.casilleros[casillero]!=undefined);
                this.casilleros[casillero]=i;                
            }

        }
        //console.log('Asignaciones:')
        //console.log(this.casilleros);
    }

    verificarJugada(casillero1, casillero2){
        if(this.casilleros[casillero1]==this.casilleros[casillero2]){
            this.tarjetas[this.casilleros[casillero1]]=true;                //no volver a girar y disable
            return true;
        }
        return false;                                                       //volver a girar y habilitar boton
    }

    public verificar(){
        for(let tarjeta in this.tarjetas){
            if(this.tarjetas[tarjeta]==false)
                return false;            //seguir jugando
        }
        this.resultado=0;
        return  true;          //gano

    }

}
