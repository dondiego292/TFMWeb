import { ModalUploadService } from './../components/modal-upload/modal-upload.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService, SidebarService, SharedService, UsuarioService, LoginGuardGuard, SubirArchivoService, SupervisorGestorService } from './service.index';
import { EncuestaService, CatalogoService, CatalogoHijoService, TipoPreguntaService, PreguntaService, ReglaService, GestorService, EncuestaGestorService } from './service.index';
import { HospitalService, MedicoService, AdminGuard, VerificaTokenGuard, RutasService } from './service.index';
import { HttpClientModule } from '@angular/common/http';


// pipes
import { DatePipe } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SettingsService,
    SidebarService,
    SharedService,
    UsuarioService,
    LoginGuardGuard,
    AdminGuard,
    VerificaTokenGuard,
    SubirArchivoService,
    ModalUploadService,
    HospitalService,
    MedicoService,
    EncuestaService,
    CatalogoService,
    CatalogoHijoService,
    TipoPreguntaService,
    PreguntaService,
    ReglaService,
    GestorService,
    SupervisorGestorService,
    EncuestaGestorService,
    DatePipe,
    RutasService
  ],
  declarations: []
})
export class ServiceModule { }
