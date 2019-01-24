import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from '../usuario/usuario.service';
import { URL_SERVICIOS } from '../../config/config';
import { Regla } from '../../models/regla.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

// import swal from 'sweetalert';
declare var swal: any;

@Injectable()
export class ReglaService {

  constructor(
    public http: HttpClient,
    public _usuarioService: UsuarioService,
  ) { }

  cargarRegla(id: string) {
    let url = URL_SERVICIOS + '/regla/leer/' + id + '?token=' + this._usuarioService.token;
    return this.http.get(url)
      .map((resp: any) => {
        return resp.regla;
      }).catch(err => {
        swal('Error', err.error.mensaje, 'error');
        return Observable.throw(err);
      });
  }

  cargarReglas(id: string) {
    let url = URL_SERVICIOS + '/regla/' + id + '?token=' + this._usuarioService.token;
    // console.log(url);
    return this.http.get(url)
      .map((resp: any) => {
        return resp.reglas;
      }).catch(err => {
        swal('Error', err.error.mensaje, 'error');
        return Observable.throw(err);
      });
  }

  crearRegla(regla: Regla) {
    let url = URL_SERVICIOS + '/regla?token=' + this._usuarioService.token;
    return this.http.post(url, regla)
            .map(  (resp: any) => {
              swal('Regla Creada', 'Satisfactoriamente', 'success');
              return resp.regla;
            }).catch(err => {
              swal('Error', err.error.mensaje, 'error');
              return Observable.throw(err);
            });
    }

    eliminarRegla( regla: Regla) {
      let url = URL_SERVICIOS + '/regla/eliminar/' + regla._id + '?token=' + this._usuarioService.token;
      return this.http.delete(url)
      .map((resp: any) => {
        swal('Regla Eliminada', 'Satisfactoriamente', 'success');
        return resp.ok;
      }).catch(err => {
        swal('Error', err.error.mensaje, 'error');
        return Observable.throw(err);
      });
    }

}
