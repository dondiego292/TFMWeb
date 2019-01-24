import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';
import { UsuarioService } from '../usuario/usuario.service';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
// import swal from 'sweetalert';
declare var swal: any;

@Injectable()
export class RutasService {

  constructor(
    public http: HttpClient,
    public _usuarioService: UsuarioService,
  ) { }

  buscarRuta(gestorID: string, fecha: string) {
    // let url = URL_SERVICIOS + '/ruta?token=' + this._usuarioService.token;
    let url = URL_SERVICIOS + `/ruta/${this._usuarioService.usuario._id}/${gestorID}/${fecha}?token=${this._usuarioService.token}`;
    return this.http.get(url)
      .map((resp: any) => {
        return resp.rutas;
      }).catch(err => {
        swal('Error', err.error.mensaje, 'error');
        return Observable.throw(err);
      });
  }

}
