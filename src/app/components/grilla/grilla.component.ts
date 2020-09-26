import { Component, OnInit } from '@angular/core';
import { JuegoMemotest } from 'src/app/clases/juego-memotest';


@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent implements OnInit {
  juego: JuegoMemotest;
  mensaje: string;
  habilitarOpciones: boolean;
  tiles;
  tarjetasElegidas: number[];

  constructor() { }

  ngOnInit(): void {
    this.nuevoJuego();
  }

  grilla(){
    this.tiles =[];
    for(let i=0; i<56; i++){
      this.tiles.push({numero: i, cols: 1, rows: 1, img:"url('')", mostrar: false });
    }
/*
    {numero: 0, cols: 1, rows: 1, img:"url('')", mostrar: false },
    {numero: 1,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 2,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 3,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 4,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 5,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 6,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 7,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 8,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 9, cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 10,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 11,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 12,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 13,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 14,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 15,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 16, cols: 1, rows: 1, img:"url('')", mostrar: false },
    {numero: 17,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 18,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 19,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 20,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 21,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 22,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 23,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 24,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 25, cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 26,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 27,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 28,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 29,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 30,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 31,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 32, cols: 1, rows: 1, img:"url('')", mostrar: false },
    {numero: 33,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 34,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 35,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 36,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 37,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 38,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 39,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 40,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 41, cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 42,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 43,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 44,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 45,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 46,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 47,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 48,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 49,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 50,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 51,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 52,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 53, cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 54,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 55,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 56,cols: 1, rows: 1, img:"url('')", mostrar: false},

    ];*/
  }

  nuevoJuego(){
    console.log('Nuevo juego');
    this.grilla();
    this.juego= new JuegoMemotest();
    this.asignarImagenes();
    this.mensaje=undefined;
    this.habilitarOpciones=true;
    this.tarjetasElegidas= [];

  }

  asignarImagenes(){
    console.log('Cargando imagenes');
    for(let i in this.juego.casilleros){
      this.tiles[i].img="url('/assets/imagenes/"+this.juego.casilleros[i]+".jpeg')"   
    }
  }

  elegir(casillero){
    //console.log('Tarjeta elegida');
    this.tarjetasElegidas.push(casillero);
    this.tiles[casillero].mostrar=true;

    if(this.tarjetasElegidas.length==2){
      this.habilitarOpciones=false;
      this.verificarPar();
    }

    
  }

  verificarPar(){
    if(this.juego.verificarJugada(this.tarjetasElegidas[0],this.tarjetasElegidas[1])){
      console.log('Hay coincidencia');
      if(this.verificar())
        this.habilitarOpciones=true; 
      this.tarjetasElegidas=[];
    }else{
      console.log('No hay coincidencia');
      setTimeout(()=>{
        this.tiles[this.tarjetasElegidas[0]].mostrar=false;
        this.tiles[this.tarjetasElegidas[1]].mostrar=false;
        this.tarjetasElegidas=[];
        this.habilitarOpciones=true;        
      },2000);

    }



  }

  verificar(){
    console.log('Verificando');
    //mensaje
    if(this.juego.verificar()){
      this.mensaje='Ganaste!';
      return false;      
    }
    return true;      //seguir jugando
  }

}
