import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  navigateToAtras() {
    this.router.navigate(['/datoscontratacion']);
  }
  navigateToSiguiente() {
    this.router.navigate(['/datospago']);
  }

}
