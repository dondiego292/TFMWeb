import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';
import { UsuarioService } from '../usuario/usuario.service';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { SupervisorGestor } from '../../models/supervisor-gestor.model';
// import swal from 'sweetalert';
declare var swal: any;

@Injectable()
export class SupervisorGestorService {

  constructor(
    public http: HttpClient,
    public _usuarioService: UsuarioService,
  ) { }


  cargarSupervisores() {
    let url = URL_SERVICIOS + '/supervisor?token=' + this._usuarioService.token;
    return this.http.get(url)
      .map((resp: any) => {
        return resp.supervisores;
      }).catch(err => {
        swal('Error', err.error.mensaje, 'error');
        return Observable.throw(err);
      });
  }


  cargarGestores() {
    let url = URL_SERVICIOS + '/supervisor/gestor?token=' + this._usuarioService.token;
    return this.http.get(url)
      .map((resp: any) => {
        return resp.gestores;
      }).catch(err => {
        swal('Error', err.error.mensaje, 'error');
        return Observable.throw(err);
      });
  }

  cargarGestoresAsignados(id: string) {
    let url = URL_SERVICIOS + '/supervisor/supergestor/' + id + '?token=' + this._usuarioService.token;
    return this.http.get(url)
      .map((resp: any) => {
        return resp.gestoresAsignados;
      }).catch(err => {
        swal('Error', err.error.mensaje, 'error');
        return Observable.throw(err);
      });
  }

  crearSuperviorGestor(supervisorGestor: SupervisorGestor) {
    let url = URL_SERVICIOS + '/supervisor?token=' + this._usuarioService.token;
    return this.http.post(url, supervisorGestor)
            .map(  (resp: any) => {
              swal('Gestor Asignado', 'Satisfactoriamente', 'success');
              return resp.supervisorGestor;
            }).catch(err => {
              swal('Error', err.error.mensaje, 'error');
              return Observable.throw(err);
            });
    }

    eliminarSupervisorGestor( id: string, gestor: string) {
      let url = URL_SERVICIOS + '/supervisor/eliminar/' + id + '/' + gestor + '?token=' + this._usuarioService.token;
      return this.http.delete(url)
      .map((resp: any) => {
        swal('Gestor Eliminado', 'Satisfactoriamente', 'success');
        return resp.ok;
      }).catch(err => {
        swal('Error', err.error.mensaje, 'error');
        return Observable.throw(err);
      });
    }


    cargarGestoresAsignadosPorSupervisor() {
      let url = URL_SERVICIOS + '/supervisor/supergestor/' + this._usuarioService.usuario._id + '?token=' + this._usuarioService.token;
      return this.http.get(url)
        .map((resp: any) => {
          return resp.gestoresAsignados;
        }).catch(err => {
          swal('Error', err.error.mensaje, 'error');
          return Observable.throw(err);
        });
    }

}
