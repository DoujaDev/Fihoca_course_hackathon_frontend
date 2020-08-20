import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vivienda } from '../models/vivienda';
import { EstadoService } from '../services/estado.service';
import { PresupuestoService } from '../services/presupuesto.service';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.css']
})
export class PresupuestoComponent implements OnInit {

  vivienda:Vivienda = new Vivienda();

  constructor(private router : Router,
              private estado:EstadoService,
              private presupuestoService:PresupuestoService) { }

  ngOnInit() {   
    this.vivienda = this.estado.vivienda;
    console.log("La vivienda en PresupuestoComponent",this.vivienda);
    this.presupuestoService.calcularPresupuesto(this.vivienda).subscribe(datos =>{
      console.log("********",datos);
      this.estado.presupuesto = datos;
      console.log(this.estado.presupuesto);
      
    });
  }
  navigateToAtras() {
    this.router.navigate(['/coberturas']);
  }
  navigateToSiguiente() {
    this.router.navigate(['/datoscontratacion']);
  }

}
