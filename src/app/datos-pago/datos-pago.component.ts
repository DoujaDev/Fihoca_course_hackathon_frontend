import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos-pago',
  templateUrl: './datos-pago.component.html',
  styleUrls: ['./datos-pago.component.css']
})
export class DatosPagoComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  navigateToAtras() {
    this.router.navigate(['/datospersonales']);
  }
  /*navigateToSiguiente() {
    this.router.navigate(['/']);
  }*/

}
