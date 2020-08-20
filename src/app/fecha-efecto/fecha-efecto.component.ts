import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators, FormsModule} from '@angular/forms';
import { EstadoService } from '../services/estado.service';

@Component({
  selector: 'app-fecha-efecto',
  templateUrl: './fecha-efecto.component.html',
  styleUrls: ['./fecha-efecto.component.css']
})
export class FechaEfectoComponent implements OnInit {

  formFechaEfecto: FormGroup;
  fechaEfecto:Date;

  constructor(private router : Router,
    public formBuilder: FormBuilder,
    private estado:EstadoService) { }

  ngOnInit() {

    this.formFechaEfecto = this.formBuilder.group({
      fechaEfecto: ['',Validators.required]  
      });
  }
  navigateToAtras() {
    this.router.navigate(['/seguroactual']);
  }
  navigateToSiguiente() {

    /******fechaEfecto*/
    this.estado.fechaEfecto = this.fechaEfecto;
    console.log("****fechaEfecto en fechaEfecto *****",this.estado.fechaEfecto);
    this.router.navigate(['/continentecontenido']);
  }

}
