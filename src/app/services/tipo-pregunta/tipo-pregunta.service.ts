import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from '../usuario/usuario.service';
import { URL_SERVICIOS } from '../../config/config';
import { TipoPregunta } from '../../models/tipo-pregunta.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

// import swal from 'sweetalert';
declare var swal: any;
@Injectable()
export class TipoPreguntaService {

  constructor(
    public http: HttpClient,
    public _usuarioService: UsuarioService,
  ) { }

  cargarTiposPreguntas() {
    let url = URL_SERVICIOS + '/tipo/pregunta?token=' + this._usuarioService.token;
    return this.http.get(url)
      .map((resp: any) => {
        return resp.tipos;
      }).catch(err => {
        swal('Error', err.error.mensaje, 'error');
        return Observable.throw(err);
      });
  }

  obtenerTipoPregunta( id: string) {
    let url = URL_SERVICIOS + '/tipo/pregunta/leer/' + id + '?token=' + this._usuarioService.token;
    return this.http.get(url)
            .map( (resp: any) => resp.tipo)
            .catch(err => {
              swal('Error', err.error.mensaje, 'error');
              return Observable.throw(err);
            });
  }

  actualizarTipoPregunta( tipoPregunta: TipoPregunta) {
    let url = URL_SERVICIOS + '/tipo/pregunta/actualizar?token=' + this._usuarioService.token;
    return this.http.put(url, tipoPregunta)
    .map((resp: any) => {
      swal('Tipo de Pregunta Actualizada', tipoPregunta.nombre, 'success');
      return resp.ok;
    }).catch(err => {
      swal('Error', err.error.mensaje, 'error');
      return Observable.throw(err);
    });
  }

  eliminarTipoPregunta( tipoPregunta: TipoPregunta) {
    let url = URL_SERVICIOS + '/tipo/pregunta/eliminar/' + tipoPregunta._id + '?token=' + this._usuarioService.token;
    return this.http.delete(url)
    .map((resp: any) => {
      swal('Tipo de Pregunta Eliminada', tipoPregunta.nombre, 'success');
      return resp.ok;
    }).catch(err => {
      swal('Error', err.error.mensaje, 'error');
      return Observable.throw(err);
    });
  }

  crearTipoPregunta(tipoPregunta: TipoPregunta) {
    let url = URL_SERVICIOS + '/tipo/pregunta?token=' + this._usuarioService.token;
    return this.http.post(url, tipoPregunta)
            .map(  (resp: any) => {
              swal('Tipo de Pregunta Creada', tipoPregunta.nombre, 'success');
              return resp.tipo;
            }).catch(err => {
              swal('Error', err.error.mensaje, 'error');
              return Observable.throw(err);
            });
    }

}
