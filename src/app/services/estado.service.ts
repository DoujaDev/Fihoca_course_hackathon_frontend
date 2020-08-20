import { Injectable, OnInit } from '@angular/core';
import { Vivienda } from '../models/vivienda';
import { Persona } from '../models/persona';


@Injectable({
  providedIn: 'root'
})
export class EstadoService implements OnInit {
 
vivienda:Vivienda = new Vivienda();
tomador:Persona = new Persona();
/*¿El tomador es el mismo que el asegurado?
si: no creamos el asegurado
sino: lo creamos*/
asegurado:Persona;
/*datos generales*/
seguroActual:boolean;
empresaSeguroActual:string;
fechafinalizacionSeguroActual:Date;
codigoPresupuesto:string;
primaAnual:number;
primaSemestral:number;
fechaEfecto:Date;
codigoPromocional:number;
coberturas:string[];
coincidenciaDireccion:boolean;
coincidenciaTomador:boolean;
hipotica:boolean;
paisCuenta:string;
numeroCuenta:string; //IBAN
presupuesto:number;
chatAtras:string;


constructor() {

  console.log("soy el constructor del estado");
  if(localStorage.length == 0 || JSON.parse(localStorage.getItem("Vivienda")) === null){

    console.log("LocalStroge:Vivienda === null");
     this.vivienda = new Vivienda();  
     this.coberturas = [];
     this.tomador = new Persona();

     /* Inicializacion de prueba */
     this.tomador.nombre ="María";
     this.tomador.apellido1 = "Salvador"
     this.vivienda.codigo = 102;
     this.vivienda.relacion = "propietario";
     this.vivienda.uso = "habitual";
     this.vivienda.tipo = "pisoBajo";
     this.vivienda.tipoConstruccion = "vigasMadera";
     this.vivienda.superficieConstruida = 95;
     this.vivienda.anyoConstruccion = new Date(2009,5,11);
     this.vivienda.residentesHabituales = 2;
     this.vivienda.ubicacion = "urbano";
     this.vivienda.puertaBlindad = true;
     this.vivienda.rejas = true;
     this.vivienda.alarma = false;
     this.vivienda.contienente = 20000;
     this.vivienda.contenido = 10000;
     this.vivienda.codigoPostal = "08225";
     this.vivienda.direccion = "Portalillo 37, 2º3ª";
     this.vivienda.superficieConstruida =100;
   
     /******Coberturas******/
     this.coberturas.push("Robo");
     this.coberturas.push("danyoAgua");
     this.coberturas.push("riesgoAccidental");
     this.coberturas.push("asistencia");
     
     this.vivienda.coberturas = this.coberturas;
     console.log("vivienda en el estado", this.vivienda);
     this.saveData();
     /***************Fin datos de prueba****************/
  }
  else if( localStorage.getItem("Tomador") === "{}" || localStorage.getItem("Tomador") === null){
    console.log("*******************LocalStroge Tomadors === null");
    this.getData();
    this.tomador = new Persona();
    /* Inicializacion de prueba */
    this.tomador.nombre ="María";
    this.tomador.apellido1 = "Salvador"
    this.saveData();
  }else{
    this.getData();
  }

  

}
  
ngOnInit(): void {

}

getData(){
  console.log("Antes de recuperar los datos",this.vivienda);
  console.log("estadoContenido",this.vivienda.contenido);
  console.log("recuperar los datos");

  this.vivienda = JSON.parse(localStorage.getItem("Vivienda"));
  this.tomador = JSON.parse(localStorage.getItem("Tomador"));

  console.log("Tomador Valor:", localStorage.getItem("Tomador"));
  console.log("Despues de recuperar los datos",this.vivienda);
  console.log("Despues de recuperar los datos",this.tomador);



  }

  saveData(){
    localStorage.setItem("Vivienda",JSON.stringify(this.vivienda));
    localStorage.setItem("Tomador", JSON.stringify(this.tomador));
  }
}
