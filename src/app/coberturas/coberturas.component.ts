import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstadoService } from '../services/estado.service';

@Component({
  selector: 'app-coberturas',
  templateUrl: './coberturas.component.html',
  styleUrls: ['./coberturas.component.css']
})
export class CoberturasComponent implements OnInit {

  constructor(private router : Router,
              private estado: EstadoService) { }

  ngOnInit() {
    this.estado.chatAtras ="/coberturas";
  }
  navigateToAtras() {
    this.router.navigate(['/continentecontenido']);
  }
  navigateToSiguiente() {
    this.router.navigate(['/datospersona']);
  }

}
