import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { UsuarioService } from '../usuario/usuario.service';
import { Pregunta } from '../../models/pregunta.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

// import swal from 'sweetalert';
declare var swal: any;

@Injectable()
export class PreguntaService {

  constructor(
    public http: HttpClient,
    public _usuarioService: UsuarioService,
  ) { }

  cargarPreguntas(id: string) {
    let url = URL_SERVICIOS + '/pregunta/' + id + '?token=' + this._usuarioService.token;
    // console.log(url);
    return this.http.get(url)
      .map((resp: any) => {
        return resp.preguntas;
      }).catch(err => {
        swal('Error', err.error.mensaje, 'error');
        return Observable.throw(err);
      });
  }


  cargarData() {
    let url = URL_SERVICIOS + '/pregunta/obtener/data?token=' + this._usuarioService.token;
    return this.http.get(url)
      .map((resp: any) => {
        return resp;
      }).catch(err => {
        swal('Error', err.error.mensaje, 'error');
        return Observable.throw(err);
      });
  }


  crearPregunta(pregunta: Pregunta) {
    let url = URL_SERVICIOS + '/pregunta?token=' + this._usuarioService.token;
    return this.http.post(url, pregunta)
            .map(  (resp: any) => {
              swal('Pregunta Creada', pregunta.texto, 'success');
              return resp.pregunta;
            }).catch(err => {
              swal('Error', err.error.mensaje, 'error');
              return Observable.throw(err);
            });
    }

    actualizarPregunta( pregunta: Pregunta) {
      let url = URL_SERVICIOS + '/pregunta/actualizar?token=' + this._usuarioService.token;
      return this.http.put(url, pregunta)
      .map((resp: any) => {
        swal('Pregunta Actualizada', pregunta.texto, 'success');
        return resp.ok;
      }).catch(err => {
        swal('Error', err.error.mensaje, 'error');
        return Observable.throw(err);
      });
    }

    eliminarPregunta( pregunta: Pregunta) {
      let url = URL_SERVICIOS + '/pregunta/eliminar/' + pregunta._id + '?token=' + this._usuarioService.token;
      return this.http.delete(url)
      .map((resp: any) => {
        swal('Pregunta Eliminada', pregunta.texto, 'success');
        return resp.ok;
      }).catch(err => {
        swal('Error', err.error.mensaje, 'error');
        return Observable.throw(err);
      });
    }

    obtenerPregunta( id: string) {
      let url = URL_SERVICIOS + '/pregunta/leer/' + id + '?token=' + this._usuarioService.token;
      return this.http.get(url)
              .map( (resp: any) => resp.pregunta)
              .catch(err => {
                swal('Error', err.error.mensaje, 'error');
                return Observable.throw(err);
              });
    }

}
