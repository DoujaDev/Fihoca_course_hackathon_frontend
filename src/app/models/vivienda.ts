export class Vivienda{
    codigo:number;
    relacion:string;
    uso:string;
    tipo:string; //TipoVivienda
    tipoConstruccion:string;
    superficieConstruida:number;
    anyoConstruccion:Date;
    residentesHabituales:number;
    ubicacion:string;
    puertaBlindad:boolean;
    rejas:boolean;
    alarma:boolean;
    contienente:number=30000; //a generar
    contenido:number=10000;  //a generar
    /************************************/
    poblacion:string;
    codigoPostal:string;
    tipoVia:string;
    direccion:string;
    numeroDireccion:number; 

    /************************************/
    coberturas:string[] = [];
}