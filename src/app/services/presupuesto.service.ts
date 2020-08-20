import { Injectable, OnInit } from '@angular/core';
import { Vivienda } from '../models/vivienda';
import { EstadoService } from './estado.service';
//import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService implements OnInit{

  URL = "http://10.250.5.14:8080/presupuesto"
  

  constructor(private http:HttpClient,
              private estado:EstadoService) {}

  ngOnInit(): void {
    this.estado.chatAtras ="/presupuesto";
  }
  

  calcularPresupuesto(vivienda:Vivienda):Observable<number>{
    console.log("*******Calcular Presupuesto********")
    console.log("vivienda en PresupuestoService",vivienda);
    return this.http.post<number>(this.URL,vivienda);
  }
}
