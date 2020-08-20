import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos-contratacion',
  templateUrl: './datos-contratacion.component.html',
  styleUrls: ['./datos-contratacion.component.css']
})
export class DatosContratacionComponent implements OnInit {


  checkedPoliticaPrivacidad:boolean = false;
  checkedEnviarOfertas:boolean=false
  constructor(private router : Router) { }

  ngOnInit() {
  }
  navigateToAtras() {
    this.router.navigate(['/presupuesto']);
  }
  navigateToSiguiente() {
    this.router.navigate(['/datospersonales']);
  }

}
