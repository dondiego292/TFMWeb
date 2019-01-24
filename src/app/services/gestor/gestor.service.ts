import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from '../usuario/usuario.service';
import { URL_SERVICIOS } from '../../config/config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Gestor } from '../../models/gestor.model';
// import swal from 'sweetalert';
declare var swal: any;

@Injectable()
export class GestorService {

  constructor(
    public http: HttpClient,
    public _usuarioService: UsuarioService,
  ) { }

  cargarGestores() {
    let url = URL_SERVICIOS + '/gestor?token=' + this._usuarioService.token;
    return this.http.get(url)
      .map((resp: any) => {
        return resp.gestores;
      }).catch(err => {
        swal('Error', err.error.mensaje, 'error');
        return Observable.throw(err);
      });
  }

  crearGestor(gestor: Gestor) {
    let url = URL_SERVICIOS + '/gestor?token=' + this._usuarioService.token;
    return this.http.post(url, gestor)
            .map(  (resp: any) => {
              swal('Gestor Creada', gestor.nombres + ' ' + gestor.apellidos, 'success');
              return resp.gestor;
            }).catch(err => {
              swal('Error', err.error.mensaje, 'error');
              return Observable.throw(err);
            });
    }

    obtenerGestor( id: string) {
      let url = URL_SERVICIOS + '/gestor/leer/' + id + '?token=' + this._usuarioService.token;
      return this.http.get(url)
              .map( (resp: any) => resp.gestor)
              .catch(err => {
                swal('Error', err.error.mensaje, 'error');
                return Observable.throw(err);
              });
    }


    actualizarGestor( gestor: Gestor) {
      let url = URL_SERVICIOS + '/gestor/actualizar?token=' + this._usuarioService.token;
      gestor.fechaActualizacion = new Date();
      return this.http.put(url, gestor)
      .map((resp: any) => {
        swal('Gestor Actualizado', gestor.nombres + '' + gestor.apellidos, 'success');
        return resp.ok;
      }).catch(err => {
        swal('Error', err.error.mensaje, 'error');
        return Observable.throw(err);
      });
    }

    eliminarGestor( gestor: Gestor) {
      let url = URL_SERVICIOS + '/gestor/eliminar/' + gestor._id + '?token=' + this._usuarioService.token;
      return this.http.delete(url)
      .map((resp: any) => {
        swal('Gestor Eliminado', gestor.nombres + '' + gestor.apellidos, 'success');
        return resp.ok;
      }).catch(err => {
        swal('Error', err.error.mensaje, 'error');
        return Observable.throw(err);
      });
    }

}
