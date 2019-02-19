import { PreguntaNewComponent } from './preguntas/pregunta-new.component';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';

// pipe module
import { PipesModule } from '../pipes/pipes.module';

import { CommonModule } from '@angular/common';

// ng2 charts
import { ChartsModule } from 'ng2-charts';

// angular2-datatable
import {DataTableModule} from 'angular2-datatable';

// loading module
import { LoadingModule } from 'ngx-loading';

// color picker
import {ColorPickerModule} from 'narik-angular-color-picker';

// rutas
import { PAGES_ROUTES } from './pages.routes';

// mapa
import { AgmCoreModule } from '@agm/core';

import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

import { IncrementadorComponent } from './../components/incrementador/incrementador.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ModalUploadComponent } from './../components/modal-upload/modal-upload.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { EncuestaEditComponent } from './encuesta/encuesta-edit.component';
import { EncuestasComponent } from './encuesta/encuestas.component';
import { EncuestaDeleteComponent } from './encuesta/encuesta-delete.component';
import { EncuestaNewComponent } from './encuesta/encuesta-new.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CatalogoNewComponent } from './catalogo/catalogo-new.component';
import { CatalogoEditComponent } from './catalogo/catalogo-edit.component';
import { CatalogoDeleteComponent } from './catalogo/catalogo-delete.component';
import { CatalogoHijoComponent } from './catalogo-hijo/catalogo-hijo.component';
import { CatalogoHijoEditComponent } from './catalogo-hijo/catalogo-hijo-edit.component';
import { CatalogoHijoDeleteComponent } from './catalogo-hijo/catalogo-hijo-delete.component';
import { CatalogoHijoNewComponent } from './catalogo-hijo/catalogo-hijo-new.component';
import { TipoPreguntaComponent } from './tipo-pregunta/tipo-pregunta.component';
import { TipoPreguntaNewComponent } from './tipo-pregunta/tipo-pregunta-new.component';
import { TipoPreguntaEditComponent } from './tipo-pregunta/tipo-pregunta-edit.component';
import { TipoPreguntaDeleteComponent } from './tipo-pregunta/tipo-pregunta-delete.component';
import { PreguntasComponent } from './preguntas/preguntas.component';

import {DndModule} from 'ng2-dnd';
import { PreguntaDeleteComponent } from './preguntas/pregunta-delete.component';
import { PreguntaUpdateComponent } from './preguntas/pregunta-update.component';
import { ReglasComponent } from './reglas/reglas.component';
import { ReglaNewComponent } from './reglas/regla-new.component';
import { ReglaUpdateComponent } from './reglas/regla-update.component';
import { ReglaDeleteComponent } from './reglas/regla-delete.component';
import { UsuarioNewComponent } from './usuarios/usuario-new.component';
import { GestorComponent } from './gestor/gestor.component';
import { GestorNewComponent } from './gestor/gestor-new.component';
import { GestorUpdateComponent } from './gestor/gestor-update.component';
import { SupervisorComponent } from './supervisor/supervisor.component';
import { SupervisorAsignacionComponent } from './supervisor/supervisor-asignacion.component';
import { EncuestaGestorComponent } from './encuesta/encuesta-gestor.component';
import { VisorComponent } from './visor/visor.component';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { UsuarioPasswordComponent } from './usuarios/usuario-password.component';
import { ReporteComponent } from './reporte/reporte.component';
import { CargaComponent } from './carga/carga.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    // PagesComponent,
    IncrementadorComponent,
    GraficoDonaComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent,
    ProfileComponent,
    UsuariosComponent,
    // ModalUploadComponent,
    HospitalesComponent,
    MedicosComponent,
    MedicoComponent,
    BusquedaComponent,
    EncuestaEditComponent,
    EncuestasComponent,
    EncuestaDeleteComponent,
    EncuestaNewComponent,
    CatalogoComponent,
    CatalogoNewComponent,
    CatalogoEditComponent,
    CatalogoDeleteComponent,
    CatalogoHijoComponent,
    CatalogoHijoEditComponent,
    CatalogoHijoDeleteComponent,
    CatalogoHijoNewComponent,
    TipoPreguntaComponent,
    TipoPreguntaNewComponent,
    TipoPreguntaEditComponent,
    TipoPreguntaDeleteComponent,
    PreguntasComponent,
    PreguntaNewComponent,
    PreguntaDeleteComponent,
    PreguntaUpdateComponent,
    ReglasComponent,
    ReglaNewComponent,
    ReglaUpdateComponent,
    ReglaDeleteComponent,
    UsuarioNewComponent,
    GestorComponent,
    GestorNewComponent,
    GestorUpdateComponent,
    SupervisorComponent,
    SupervisorAsignacionComponent,
    EncuestaGestorComponent,
    VisorComponent,
    UsuarioPasswordComponent,
    ReporteComponent,
    CargaComponent,
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    DndModule
  ],
  imports: [
    CommonModule,
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule,
    PipesModule,
    DataTableModule,
    DndModule.forRoot(),
    LoadingModule,
    ColorPickerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAk8tCmQWibgUzW66W9C01wwIdl9mmveiA'
    }),
    BsDatepickerModule.forRoot()
  ]
})


export class PagesModule { }
