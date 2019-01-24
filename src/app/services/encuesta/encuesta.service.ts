import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from './../../config/config';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from '../usuario/usuario.service';
import { Encuesta } from '../../models/encuesta.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

// import swal from 'sweetalert';
declare var swal: any;

@Injectable()
export class EncuestaService {

  constructor(
    public http: HttpClient,
    public _usuarioService: UsuarioService,
  ) { }

  cargarEncuestas() {
    let url = URL_SERVICIOS + '/encuesta?token=' + this._usuarioService.token;
    return this.http.get(url)
      .map((resp: any) => {
        return resp.encuestas;
      }).catch(err => {
        swal('Error', err.error.mensaje, 'error');
        return Observable.throw(err);
      });
  }

  obtenerEncuesta( uuid: string) {
    let url = URL_SERVICIOS + '/encuesta/leer/' + uuid + '?token=' + this._usuarioService.token;
    return this.http.get(url)
            .map( (resp: any) => resp.encuesta)
            .catch(err => {
              swal('Error', err.error.mensaje, 'error');
              return Observable.throw(err);
            });
  }

  actualizarEncuesta( encuesta: Encuesta) {
    let url = URL_SERVICIOS + '/encuesta/actualizar?token=' + this._usuarioService.token;
    encuesta.fechaActualizacion = new Date();
    return this.http.put(url, encuesta)
    .map((resp: any) => {
      swal('Encuesta Actualizada', encuesta.nombre, 'success');
      return resp.ok;
    }).catch(err => {
      swal('Error', err.error.mensaje, 'error');
      return Observable.throw(err);
    });
  }

  eliminarEncuesta( encuesta: Encuesta) {
    let url = URL_SERVICIOS + '/encuesta/eliminar/' + encuesta.uuid + '?token=' + this._usuarioService.token;
    return this.http.delete(url)
    .map((resp: any) => {
      swal('Encuesta Eliminada', encuesta.nombre, 'success');
      return resp.ok;
    }).catch(err => {
      swal('Error', err.error.mensaje, 'error');
      return Observable.throw(err);
    });
  }

  crearEncuesta(encuesta: Encuesta) {
    let url = URL_SERVICIOS + '/encuesta?token=' + this._usuarioService.token;
    return this.http.post(url, encuesta)
            .map(  (resp: any) => {
              swal('Encuesta Creada', encuesta.nombre, 'success');
              return resp.encuesta;
            }).catch(err => {
              swal('Error', err.error.mensaje, 'error');
              return Observable.throw(err);
            });
    }

    publicarEncuesta(encuesta: Encuesta) {
      let url = URL_SERVICIOS + '/encuesta/publicar/' + encuesta._id + '?token=' + this._usuarioService.token;
      return this.http.get(url)
              .map(  (resp: any) => {
                swal('Encuesta Publicada', encuesta.nombre, 'success');
                return resp.encuesta;
              }).catch(err => {
                swal('Error', err.error.mensaje, 'error');
                return Observable.throw(err);
              });
      }

      despublicarEncuesta(encuesta: Encuesta) {
        let url = URL_SERVICIOS + '/encuesta/despublicar/' + encuesta._id + '?token=' + this._usuarioService.token;
        return this.http.get(url)
                .map(  (resp: any) => {
                  swal('Encuesta Despublicada', encuesta.nombre, 'success');
                  return resp.encuesta;
                }).catch(err => {
                  swal('Error', err.error.mensaje, 'error');
                  return Observable.throw(err);
                });
        }


}
