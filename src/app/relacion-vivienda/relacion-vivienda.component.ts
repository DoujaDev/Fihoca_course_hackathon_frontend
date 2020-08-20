import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vivienda } from '../models/vivienda';
import { EstadoService } from '../services/estado.service';
import {FormBuilder, FormControl, FormGroup, Validators, FormsModule} from '@angular/forms';



@Component({
  selector: 'app-relacion-vivienda',
  templateUrl: './relacion-vivienda.component.html',
  styleUrls: ['./relacion-vivienda.component.css']
})
export class RelacionViviendaComponent implements OnInit {
  
  vivienda:Vivienda = new Vivienda;

  
  constructor(private router: Router,
              private estado:EstadoService) { }

  ngOnInit() {
    
    this.estado.chatAtras ="/relacionvivienda";
    
  }
  /*navigateToAtras() {
    this.router.navigate(['/personasvivienda']);
  }*/
  navigateToSiguiente() {
    console.log("Datos Relacion Vivienda",this.estado.vivienda.relacion);
    console.log("Datos Uso Vivienda",this.estado.vivienda.uso);
    this.router.navigate(['/personasvivienda']);
  }

  setRelation(relacion:string){

    this.estado.vivienda.relacion = relacion;
    console.log("****R:Vivienda*****",this.estado.vivienda.relacion);
    this.estado.saveData();
  }

  setUso(uso:string){
    this.estado.vivienda.uso = uso;
    console.log("****Uso:Vivienda*****",this.estado.vivienda.uso);
    this.estado.saveData();
  }
}

