import { GestorComponent } from './gestor/gestor.component';
import { PreguntaNewComponent } from './preguntas/pregunta-new.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { TipoPreguntaDeleteComponent } from './tipo-pregunta/tipo-pregunta-delete.component';
import { CatalogoHijoNewComponent } from './catalogo-hijo/catalogo-hijo-new.component';
import { CatalogoHijoDeleteComponent } from './catalogo-hijo/catalogo-hijo-delete.component';
import { CatalogoHijoComponent } from './catalogo-hijo/catalogo-hijo.component';
import { CatalogoNewComponent } from './catalogo/catalogo-new.component';
import { Routes, RouterModule } from '@angular/router';

import {Graficas1Component} from './graficas1/graficas1.component';
import {ProgressComponent} from './progress/progress.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
// Guards
import { LoginGuardGuard, AdminGuard, VerificaTokenGuard } from '../services/service.index';
import { EncuestasComponent } from './encuesta/encuestas.component';
import { EncuestaEditComponent } from './encuesta/encuesta-edit.component';
import { EncuestaDeleteComponent } from './encuesta/encuesta-delete.component';
import { EncuestaNewComponent } from './encuesta/encuesta-new.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CatalogoEditComponent } from './catalogo/catalogo-edit.component';
import { CatalogoDeleteComponent } from './catalogo/catalogo-delete.component';
import { CatalogoHijoEditComponent } from './catalogo-hijo/catalogo-hijo-edit.component';
import { TipoPreguntaComponent } from './tipo-pregunta/tipo-pregunta.component';
import { TipoPreguntaNewComponent } from './tipo-pregunta/tipo-pregunta-new.component';
import { TipoPreguntaEditComponent } from './tipo-pregunta/tipo-pregunta-edit.component';
import { PreguntaUpdateComponent } from './preguntas/pregunta-update.component';
import { PreguntaDeleteComponent } from './preguntas/pregunta-delete.component';
import { ReglaNewComponent } from './reglas/regla-new.component';
import { ReglasComponent } from './reglas/reglas.component';
import { ReglaUpdateComponent } from './reglas/regla-update.component';
import { ReglaDeleteComponent } from './reglas/regla-delete.component';
import { UsuarioNewComponent } from './usuarios/usuario-new.component';
import { GestorNewComponent } from './gestor/gestor-new.component';
import { GestorUpdateComponent } from './gestor/gestor-update.component';
import { SupervisorComponent } from './supervisor/supervisor.component';
import { SupervisorAsignacionComponent } from './supervisor/supervisor-asignacion.component';
import { EncuestaGestorComponent } from './encuesta/encuesta-gestor.component';
import { VisorComponent } from './visor/visor.component';
import { UsuarioPasswordComponent } from './usuarios/usuario-password.component';
import { ReporteComponent } from './reporte/reporte.component';
import { Reporte2Component } from './reporte2/reporte2.component';
import { CargaComponent } from './carga/carga.component';




const pagesRoute: Routes = [

      {
        path: 'dashboard',
        component: DashboardComponent,
        // canActivate: [VerificaTokenGuard],
        data: { titulo: 'Dashboard' }
      },
      { path: 'visor', component: VisorComponent, data: { titulo: 'Visor' }},
      { path: 'supervisor/gestor/:id', component: SupervisorAsignacionComponent, data: { titulo: 'Asignación de Gestores' }},
      { path: 'supervisor', component: SupervisorComponent, data: { titulo: 'Mantenimiento de Supervisores' }},
      { path: 'gestor/edit/:id', component: GestorUpdateComponent, data: { titulo: 'Actualizar Gestor' }},
      { path: 'gestor/create', component: GestorNewComponent, data: { titulo: 'Crear Gestor' }},
      { path: 'gestor', component: GestorComponent, data: { titulo: 'Mantenimiento de Gestores' }},
      { path: 'reglas/eliminar/:id', component: ReglaDeleteComponent, data: { titulo: 'Eliminar Regla de Visibilidad' }},
      { path: 'reglas/edit/:id', component: ReglaUpdateComponent, data: { titulo: 'Actualizar Regla de Visibilidad' }},
      { path: 'reglas/:id', component: ReglasComponent, data: { titulo: 'Reglas de Visibilidad' }},
      { path: 'reglas/create/:id', component: ReglaNewComponent, data: { titulo: 'Nueva Regla de Visibilidad' }},
      { path: 'preguntas/eliminar/:id', component: PreguntaDeleteComponent, data: { titulo: 'Eliminar Pregunta' }},
      { path: 'preguntas/edit/:id', component: PreguntaUpdateComponent, data: { titulo: 'Actualizar Pregunta' }},
      { path: 'preguntas/:id', component: PreguntasComponent, data: { titulo: 'Preguntas' }},
      { path: 'preguntas/create/:id', component: PreguntaNewComponent, data: { titulo: 'Nueva Pregunta' }},
      { path: 'tipo/preguntas', component: TipoPreguntaComponent, data: { titulo: 'Tipo de Preguntas' }},
      { path: 'tipo/preguntas/nuevo', component: TipoPreguntaNewComponent, data: { titulo: 'Nuevo Tipo de Pregunta' }},
      { path: 'tipo/preguntas/edit/:id', component: TipoPreguntaEditComponent, data: { titulo: 'Editar Tipo de Pregunta' }},
      { path: 'tipo/preguntas/delete/:id', component: TipoPreguntaDeleteComponent, data: { titulo: 'Eliminar Tipo de Pregunta' }},
      { path: 'catalogo/hijo/:id', component: CatalogoHijoComponent, data: { titulo: 'Catálogos Hijos' }},
      { path: 'catalogo/hijo/create/:id', component: CatalogoHijoNewComponent, data: { titulo: 'Nuevo Catálogo Hijo' }},
      { path: 'catalogo/hijo/edit/:id', component: CatalogoHijoEditComponent, data: { titulo: 'Editar Catálogo Hijo' }},
      { path: 'catalogo/hijo/delete/:id', component: CatalogoHijoDeleteComponent, data: { titulo: 'Eliminar Catálogo Hijo' }},
      { path: 'catalogos', component: CatalogoComponent, data: { titulo: 'Listado de Catálogos Padres' }},
      { path: 'catalogo/nuevo', component: CatalogoNewComponent, data: { titulo: 'Crear Catálogo' }},
      { path: 'catalogo/:id', component: CatalogoEditComponent, data: { titulo: 'Actualizar Catálogo' }},
      { path: 'catalogo/eliminar/:id', component: CatalogoDeleteComponent, data: { titulo: 'Eliminar Catálogo' }},
      { path: 'encuesta/gestor/:id', component: EncuestaGestorComponent, data: { titulo: 'Asignación de Gestores' }},
      { path: 'encuestas', component: EncuestasComponent, data: { titulo: 'Listado de Encuestas' }},
      { path: 'encuesta/nuevo', component: EncuestaNewComponent, data: { titulo: 'Crear Encuesta' }},
      { path: 'encuesta/:id', component: EncuestaEditComponent, data: { titulo: 'Actualizar Encuesta' }},
      { path: 'encuesta/eliminar/:id', component: EncuestaDeleteComponent, data: { titulo: 'Eliminar Encuesta' }},
      { path: 'progress', component: ProgressComponent, data: { titulo: 'ProgressBars' }},
      { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Gráficas' }},
      { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' }},
      { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' }},
      { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes de Tema' }},
      { path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil de Usuario' }},
      { path: 'busqueda/:termino', component: BusquedaComponent, data: { titulo: 'Buscador' }},
      { path: 'usuario/password/:id', component: UsuarioPasswordComponent, data: { titulo: 'Actualizar Password' }},
      { path: 'reporte', component: ReporteComponent, data: { titulo: 'Reporte Publicidad' }},
      { path: 'reporte2', component: Reporte2Component, data: { titulo: 'Reporte GeoLocalización' }},
      { path: 'carga', component: CargaComponent, data: { titulo: 'Carga Archivo' }},
      // Mantenimientos
      {
        path: 'usuarios',
        component: UsuariosComponent,
        canActivate: [AdminGuard],
        data: { titulo: 'Mantenimiento de Usuarios' }
      },
      {
        path: 'usuario/create',
        component: UsuarioNewComponent,
        // canActivate: [AdminGuard],
        data: { titulo: 'Crear Usuario' }
      },



      { path: 'hospitales', component: HospitalesComponent, data: { titulo: 'Mantenimiento de Hospitales' }},
      { path: 'medicos', component: MedicosComponent, data: { titulo: 'Mantenimiento de Médicos' }},
      { path: 'medico/:id', component: MedicoComponent, data: { titulo: 'Actualizar Médicos' }},
      { path: '', redirectTo: '/encuestas', pathMatch: 'full'},

];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoute );
