import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators, FormsModule} from '@angular/forms';
import { EstadoService } from '../services/estado.service';

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.css']
})
export class DireccionComponent implements OnInit {

  FormDireccion: FormGroup;
  codigoPostal:string;
  direccion:string;

  constructor(private router : Router,
              public formBuilder: FormBuilder,
              private estado:EstadoService) { }

  ngOnInit() {
    this.codigoPostal = this.estado.vivienda.codigoPostal;
    this.direccion = this.estado.vivienda.direccion;
    this.estado.chatAtras ="/direccion";
    this.FormDireccion = this.formBuilder.group({

      codigoPostal: ['',[Validators.required]&&[Validators.pattern('^((0[1-9]|5[0-2])|[1-4][0-9])[0-9]{3}$')]],
      direccion: ['']
    });
  }
  navigateToAtras() {
    this.router.navigate(['/personasvivienda']);
  }
  navigateToSiguiente() {
    this.estado.vivienda.codigoPostal = this.codigoPostal;
    console.log("****Codigo Postal:Vivienda*****",this.estado.vivienda.codigoPostal);
    console.log("****Vivienda en Direccion*****",this.estado.vivienda);
    
    /**direccion******/
    this.estado.vivienda.direccion = this.direccion;
    console.log("****Codigo Postal:Vivienda*****",this.estado.vivienda.direccion);
    console.log("****Vivienda en Direccion*****",this.estado.vivienda);
    
    this.estado.saveData();
    this.router.navigate(['/infocatastro']);
  }

}
