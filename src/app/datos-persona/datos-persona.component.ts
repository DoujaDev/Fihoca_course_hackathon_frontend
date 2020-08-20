import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstadoService } from '../services/estado.service';

export interface Nacionalidad{
  value: string;
  viewValue:string;
}

@Component({
  selector: 'app-datos-persona',
  templateUrl: './datos-persona.component.html',
  styleUrls: ['./datos-persona.component.css']
})
export class DatosPersonaComponent implements OnInit {
  nacionalidades : Nacionalidad[]=[
    {value:'afganistán1',viewValue:'Afganistán'},
    {value:'alemania',viewValue:'Alemania'},
    {value:'arabiasaudita',viewValue:'Arabia Saudita'},
    {value:'argetina',viewValue:'Argetina'},
    {value:'belgica',viewValue:'Bélgica'},
    {value:'brazil',viewValue:'Brazil'},
    {value:'campoya',viewValue:'Campoya'},
    {value:'chile',viewValue:'Chile'},
    {value:'china',viewValue:'China'},
    {value:'ecuador',viewValue:'Ecuador'},
    {value:'egipto',viewValue:'Egipto'},
    {value:'francia',viewValue:'Francia'},
    {value:'finlandia',viewValue:'Finlandia'},
    {value:'holanda',viewValue:'Holanda'},
    {value:'iran',viewValue:'Irán'},
    {value:'letonia',viewValue:'Letonia'},
    {value:'nuevazelanda',viewValue:'Nueva Zelanda'},
    {value:'suiza',viewValue:'Suiza'},
    {value:'venezuela',viewValue:'Venezuela'},








  ];
  constructor(private router : Router,
              private estado:EstadoService) { }

  ngOnInit() {
    this.estado.chatAtras ="/datospersona";
  }
  navigateToAtras() {
    this.router.navigate(['/coberturas']);
  }
  navigateToSiguiente() {
    this.router.navigate(['/presupuesto']);
  }

}
