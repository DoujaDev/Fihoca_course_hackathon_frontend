import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators, FormsModule} from '@angular/forms';
import { EstadoService } from '../services/estado.service';

@Component({
  selector: 'app-contienente-contenido',
  templateUrl: './contienente-contenido.component.html',
  styleUrls: ['./contienente-contenido.component.css']
})
export class ContienenteContenidoComponent implements OnInit {

  formContinenteContenido:FormGroup;
  contenido:number;
  continente:number;

  constructor(private router : Router,
    public formBuilder: FormBuilder,
    private estado:EstadoService) { }

  ngOnInit() {
    this.contenido = this.estado.vivienda.contenido;
    this.continente = this.estado.vivienda.contienente;
    this.estado.chatAtras ="/continentecontenido";
    this.formContinenteContenido = this.formBuilder.group({
      continente:['',[Validators.required]&&[Validators.pattern('^[0-9]{5,}$')]],
      contenido:['',[Validators.required]&&[Validators.pattern('^[0-9]{5,}$')]],

      });
  }
  navigateToAtras() {
    console.log("******contienentecontienente********",this.estado.vivienda.contienente);
    this.router.navigate(['/fechaefecto']);
        this.router.navigate(['/fechaefecto']);
  }
  navigateToSiguiente() {
  
     /******Continente*/
     this.estado.vivienda.contienente = this.continente;
     console.log("****Continente en ContienenteContenido *****",this.estado.vivienda);
     console.log("Continente:",this.estado.vivienda.contienente);

     /******contenido*/
     this.estado.vivienda.contenido = this.contenido;
     console.log("****contenido en ContienenteContenido *****",this.estado.vivienda);
     console.log("contenido:",this.estado.vivienda.contenido);

     this.estado.saveData();
    this.router.navigate(['/coberturas']);
  }


}
