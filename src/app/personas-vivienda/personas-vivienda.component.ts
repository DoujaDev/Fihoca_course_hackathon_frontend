import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstadoService } from '../services/estado.service';

@Component({
  selector: 'app-personas-vivienda',
  templateUrl: './personas-vivienda.component.html',
  styleUrls: ['./personas-vivienda.component.css']
})
export class PersonasViviendaComponent implements OnInit {

  constructor(private router : Router,
              private estado:EstadoService) { }

  ngOnInit() {
    this.estado.chatAtras ="/personasvivienda";
    console.log("Datos Relacion Vivienda",this.estado.vivienda);
  }
  navigateToAtras() {
    this.router.navigate(['/relacionvivienda']);
  }
  navigateToSiguiente() {
    this.router.navigate(['/direccion']);
  }

  setHabitantes(habitantes:number){

    this.estado.vivienda.residentesHabituales = habitantes;
    console.log("****habitantes:Vivienda*****",this.estado.vivienda);
    this.estado.saveData();
  }

}
