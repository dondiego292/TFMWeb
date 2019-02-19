import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from '../usuario/usuario.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

// import swal from 'sweetalert';
import { URL_SERVICIOS } from '../../config/config';
declare var swal: any;

@Injectable()
export class ReporteService {


  constructor(
    public http: HttpClient,
    public _usuarioService: UsuarioService,
  ) { }

  cargarDatos() {
    let url = URL_SERVICIOS + '/reporte?token=' + this._usuarioService.token;
    return this.http.get(url)
      .map((resp: any) => {
        return resp.datas;
      }).catch(err => {
        swal('Error', err.error.mensaje, 'error');
        return Observable.throw(err);
      });
  }

  cargarImagen(id: string) {
    let url = URL_SERVICIOS + `/reporte/${id}?token=` + this._usuarioService.token;
    return this.http.get(url)
      .map((resp: any) => {
          return resp;
      });
  }

  cargarDatosExcel(json: any) {
    let url = URL_SERVICIOS + `/carga?token=` + this._usuarioService.token;
    console.log(url);
    return this.http.post(url, json)
      .map((resp: any) => {
          return resp.ok;
      });
  }

}
