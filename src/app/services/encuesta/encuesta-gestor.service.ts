import { URL_SERVICIOS } from './../../config/config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from '../usuario/usuario.service';
import { Observable } from 'rxjs/Observable';
import { EncuestaGestor } from '../../models/encuesta-gestor.model';
// import swal from 'sweetalert';
declare var swal: any;

@Injectable()
export class EncuestaGestorService {

  constructor(
    public http: HttpClient,
    public _usuarioService: UsuarioService,
  ) { }


  cargarGestoresAsignados(id: string) {
    let url = URL_SERVICIOS + '/encuesta/gestor/' + id + '?token=' + this._usuarioService.token;
    return this.http.get(url)
      .map((resp: any) => {
        return resp.gestoresAsignados;
      }).catch(err => {
        swal('Error', err.error.mensaje, 'error');
        return Observable.throw(err);
      });
  }

  cargarGestores(id: string) {
    let url = URL_SERVICIOS + '/encuesta/gestor/data/' + id + '?token=' + this._usuarioService.token;
    return this.http.get(url)
      .map((resp: any) => {
        return resp.gestoresAsignados;
      }).catch(err => {
        swal('Error', err.error.mensaje, 'error');
        return Observable.throw(err);
      });
  }

  crearEncuestaGestor(encuestaGestor: EncuestaGestor) {
    let url = URL_SERVICIOS + '/encuesta/gestor?token=' + this._usuarioService.token;
    return this.http.post(url, encuestaGestor)
            .map(  (resp: any) => {
              swal('Gestor Asignado', 'Satisfactoriamente', 'success');
              return resp.supervisorGestor;
            }).catch(err => {
              swal('Error', err.error.mensaje, 'error');
              return Observable.throw(err);
            });
    }

    eliminarEncuestaGestor( id: string, gestor: string) {
      let url = URL_SERVICIOS + '/encuesta/gestor/eliminar/' + id + '/' + gestor + '?token=' + this._usuarioService.token;
      return this.http.delete(url)
      .map((resp: any) => {
        swal('Gestor Eliminado', 'Satisfactoriamente', 'success');
        return resp.ok;
      }).catch(err => {
        swal('Error', err.error.mensaje, 'error');
        return Observable.throw(err);
      });
    }

}
