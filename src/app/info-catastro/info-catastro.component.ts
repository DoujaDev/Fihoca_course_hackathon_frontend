import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators, FormsModule} from '@angular/forms';
import { EstadoService } from '../services/estado.service';

export interface Tipovivienda{
  value:string;
  viewValue:string
}
export interface Tipocontruccion{
  value:string;
  viewValue:string;
}


@Component({
  selector: 'app-info-catastro',
  templateUrl: './info-catastro.component.html',
  styleUrls: ['./info-catastro.component.css']
})


export class InfoCatastroComponent implements OnInit {

  infoCatastro: FormGroup;
  valorTipoVivienda:string;
  valorTipoContruccion:string;
  anyoConstruccion:Date;
  superficieConstruida:number;


  tipoViviendas:Tipovivienda[]=[
    {value: 'pisoBajo' , viewValue :'Piso Bajo'},
    {value: 'pisoAlto' , viewValue :'Piso en alto'},
    {value: 'unifamiliarAdosado' , viewValue :'Unifamiliar adosado/pareado'},
    {value: 'unifamiliarIndependiente' , viewValue :'Unifamiliar independiente'},
  ];
  tipoConstrucciones:Tipocontruccion[]=[
    {value: 'vigasMadera' , viewValue :'Hormigón,piedra, ladrillo o metal'},
    {value: 'vigasMetal' , viewValue :'Piedra o ladrillo con vigas de madera'},
    {value: 'otros' , viewValue :'Otro'},
  ];

  constructor(private router : Router,
    public formBuilder: FormBuilder,
    private estado:EstadoService) { }

  ngOnInit() {
    this.valorTipoVivienda = this.estado.vivienda.tipo;
    this.valorTipoContruccion = this.estado.vivienda.tipoConstruccion;
    this.anyoConstruccion = this.estado.vivienda.anyoConstruccion;
    this.superficieConstruida = this.estado.vivienda.superficieConstruida;


    this.estado.chatAtras ="/infocatastro";
    this.infoCatastro = this.formBuilder.group({
    anyoConstruccion: ['',Validators.required],
    superficieConstruida:['',[Validators.required]&&[Validators.pattern('^[0-9]{2,}$')]],

    });
  }

  navigateToAtras() {
    this.router.navigate(['/direccion']);
  }


  navigateToSiguiente() {
    console.log("hola");
    /******TipoVivienda*/
    this.estado.vivienda.tipo = this.valorTipoVivienda;
    console.log("****Vivienda en InfoCatastro *****",this.estado.vivienda);
    console.log("tipoVivienda:",this.estado.vivienda.tipo);

     /******valorTipoContruccion*/
     this.estado.vivienda.tipoConstruccion = this.valorTipoContruccion;
     console.log("****Vivienda en InfoCatastro *****",this.estado.vivienda);
     console.log("valorTipoContruccion:",this.estado.vivienda.tipoConstruccion);

      /******anyoConstruccion*/
      this.estado.vivienda.anyoConstruccion = this.anyoConstruccion;
      console.log("****anyoConstruccion en InfoCatastro *****",this.estado.vivienda);
      console.log("anyoConstruccion:",this.estado.vivienda.anyoConstruccion);

       /******superficieConstruida*/
       this.estado.vivienda.superficieConstruida = Number(this.superficieConstruida);
       console.log("****anyoConstruccion en InfoCatastro *****",this.estado.vivienda);
       console.log("anyoConstruccion:",this.estado.vivienda.superficieConstruida);


    this.estado.saveData();
    this.router.navigate(['/seguroactual']);
  }

}
