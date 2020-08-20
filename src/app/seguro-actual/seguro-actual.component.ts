import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators, FormsModule} from '@angular/forms';
import { EstadoService } from '../services/estado.service';

@Component({
  selector: 'app-seguro-actual',
  templateUrl: './seguro-actual.component.html',
  styleUrls: ['./seguro-actual.component.css']
})
export class SeguroActualComponent implements OnInit {

  //formSeguroActual: FormGroup;
  seguroActual:boolean = false;
  fechafinalizacion:Date;

  constructor(private router : Router,
              public formBuilder: FormBuilder,
              private estado:EstadoService) { }


  ngOnInit() {
  }

  setRespuesta(respuesta:boolean){
      if(respuesta === true){
        this.seguroActual = true;
        this.estado.seguroActual = true;
      }else{
        this.seguroActual = false;
        this.estado.seguroActual = true;
      }
  }

  setEmpresaSeguroActual(empresa:string){
      this.estado.empresaSeguroActual = empresa;
  }
  navigateToAtras() {
    this.router.navigate(['/infocatastro']);
  }

  navigateToSiguiente() {

    /******fechafinalizacion*/
    this.estado.fechafinalizacionSeguroActual = this.fechafinalizacion;
    console.log("****anyoConstruccion en seguroActual *****",this.estado.fechafinalizacionSeguroActual);
    this.router.navigate(['/fechaefecto']);

    /******seguroActual*/
    console.log("****seguroActual en seguroActual *****",this.estado.seguroActual);
    this.router.navigate(['/fechaefecto']);

     /******empresaSeguroActual*/
     console.log("****empresaSeguroActual en seguroActual *****",this.estado.empresaSeguroActual);
     this.router.navigate(['/fechaefecto']);
  }

}
