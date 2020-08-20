import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { RelacionViviendaComponent } from './relacion-vivienda/relacion-vivienda.component';
import { PersonasViviendaComponent } from './personas-vivienda/personas-vivienda.component';
import { DireccionComponent } from './direccion/direccion.component';
import { InfoCatastroComponent } from './info-catastro/info-catastro.component';
import { SeguroActualComponent } from './seguro-actual/seguro-actual.component';
import { FechaEfectoComponent } from './fecha-efecto/fecha-efecto.component';
import { DatosPersonaComponent } from './datos-persona/datos-persona.component';
import { PresupuestoComponent } from './presupuesto/presupuesto.component';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';
import { DatosContratacionComponent } from './datos-contratacion/datos-contratacion.component';
import { DatosPagoComponent } from './datos-pago/datos-pago.component';
import { ContienenteContenidoComponent } from './contienente-contenido/contienente-contenido.component';
import {AyudaComponent} from "./ayuda/ayuda.component";
import { CoberturasComponent } from './coberturas/coberturas.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';


const routes: Routes = [
  { path:'',redirectTo:'relacionvivienda',pathMatch:'full'},
  { path:'inicio',component:HomeComponent},
  { path:'relacionvivienda',component:RelacionViviendaComponent},
  { path:'personasvivienda',component:PersonasViviendaComponent},
  { path: 'direccion',component:DireccionComponent},
  { path:'infocatastro',component:InfoCatastroComponent},
  { path:'seguroactual',component:SeguroActualComponent},
  { path:'fechaefecto',component:FechaEfectoComponent},
  { path:'datospersona',component:DatosPersonaComponent},
  { path:'coberturas',component:CoberturasComponent},
  { path:'presupuesto',component:PresupuestoComponent},
  { path:'datospersonales',component:DatosPersonalesComponent},
  { path:'datoscontratacion',component:DatosContratacionComponent},
  { path:'datospago',component:DatosPagoComponent},
  { path:'continentecontenido', component:ContienenteContenidoComponent},
  { path:'ayuda', component:AyudaComponent},
  { path:'chatbot', component:ChatBoxComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
