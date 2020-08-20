import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }     from '@angular/common/http'
//PAGINAS
import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RelacionViviendaComponent } from './relacion-vivienda/relacion-vivienda.component';
import { PersonasViviendaComponent } from './personas-vivienda/personas-vivienda.component';
import { DireccionComponent } from './direccion/direccion.component';
import { InfoCatastroComponent } from './info-catastro/info-catastro.component';
import { SeguroActualComponent } from './seguro-actual/seguro-actual.component';
import { FechaEfectoComponent } from './fecha-efecto/fecha-efecto.component';
import { ContienenteContenidoComponent } from './contienente-contenido/contienente-contenido.component';
import { DatosPersonaComponent } from './datos-persona/datos-persona.component';
import { PresupuestoComponent } from './presupuesto/presupuesto.component';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';
import { DatosContratacionComponent } from './datos-contratacion/datos-contratacion.component';
import { DatosPagoComponent } from './datos-pago/datos-pago.component';
//FIN PAGINAS

// FRONTEND
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';

//FINAL FRONTEND 

//MAMIL AYUDA
import {AyudaComponent} from "./ayuda/ayuda.component";
import {AyudaSheetComponent} from "./ayuda/ayuda.component";
import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { CoberturasComponent } from './coberturas/coberturas.component';
import { EstadoService } from './services/estado.service';
import { PresupuestoService } from './services/presupuesto.service';
import { CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { ChatBoxComponent } from './chat-box/chat-box.component'; 
//FIN MAMIL AYUDA
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RelacionViviendaComponent,
    PersonasViviendaComponent,
    DireccionComponent,
    InfoCatastroComponent,
    SeguroActualComponent,
    FechaEfectoComponent,
    ContienenteContenidoComponent,
    DatosPersonaComponent,
    PresupuestoComponent,
    DatosPersonalesComponent,
    DatosContratacionComponent,
    DatosPagoComponent,
    AyudaComponent,
    AyudaSheetComponent,
    CoberturasComponent,
    ChatBoxComponent
  ],
  //mamil - ini
  exports: [
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
    AyudaSheetComponent//porque se utiliza en otro componente
  ],
  //mamil - fin
  imports: [
    BrowserModule,
    //FormBuilder,
    //FormGroup,
    ReactiveFormsModule,
    //Validators,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    TextFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule,
    MatStepperModule,
    MatListModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents:[
    AyudaSheetComponent
  ],
  providers: [
    EstadoService,
    PresupuestoService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

