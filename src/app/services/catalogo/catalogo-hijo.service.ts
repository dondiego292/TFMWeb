import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from '../usuario/usuario.service';
import { URL_SERVICIOS } from '../../config/config';
import { CatalogoHijo } from '../../models/catalogo-hijo.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

// import swal from 'sweetalert';
declare var swal: any;

@Injectable()
export class CatalogoHijoService {

  constructor(
    public http: HttpClient,
    public _usuarioService: UsuarioService,
  ) { }


  cargarCatalogos(id: string) {
    let url = URL_SERVICIOS + '/catalogo/hijo/' + id + '?token=' + this._usuarioService.token;
    return this.http.get(url)
      .map((resp: any) => {
        return resp.catalogos;
      }).catch(err => {
        swal('Error', err.error.mensaje, 'error');
        return Observable.throw(err);
      });
  }

  obtenerCatalogo( id: string) {
    let url = URL_SERVICIOS + '/catalogo/hijo/leer/' + id + '?token=' + this._usuarioService.token;
    return this.http.get(url)
            .map( (resp: any) => resp.catalogo)
            .catch(err => {
              swal('Error', err.error.mensaje, 'error');
              return Observable.throw(err);
            });
  }

  crearCatalogo(catalogo: CatalogoHijo) {
    let url = URL_SERVICIOS + '/catalogo/hijo?token=' + this._usuarioService.token;
    return this.http.post(url, catalogo)
            .map(  (resp: any) => {
              swal('Catálogo Creado', catalogo.nombre, 'success');
              return resp.catalogo;
            }).catch(err => {
              swal('Error', err.error.mensaje, 'error');
              return Observable.throw(err);
            });
    }


    actualizarCatalogo( catalogo: CatalogoHijo) {
      let url = URL_SERVICIOS + '/catalogo/hijo/actualizar?token=' + this._usuarioService.token;
      return this.http.put(url, catalogo)
      .map((resp: any) => {
        swal('Catálogo Actualizado', catalogo.nombre, 'success');
        return resp.ok;
      }).catch(err => {
        swal('Error', err.error.mensaje, 'error');
        return Observable.throw(err);
      });
    }

    eliminarCatalogo( catalogo: CatalogoHijo) {
      let url = URL_SERVICIOS + '/catalogo/hijo/eliminar/' + catalogo._id + '?token=' + this._usuarioService.token;
      return this.http.delete(url)
      .map((resp: any) => {
        swal('Catalogo Eliminado', catalogo.nombre, 'success');
        return resp.ok;
      }).catch(err => {
        swal('Error', err.error.mensaje, 'error');
        return Observable.throw(err);
      });
    }

}
