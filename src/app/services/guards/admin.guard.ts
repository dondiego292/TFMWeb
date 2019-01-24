import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UsuarioService } from '../usuario/usuario.service';
import { Router } from '@angular/router';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(
    private _usuarioService: UsuarioService,
    private router: Router
  ) {

  }

  canActivate() {

    if (this._usuarioService.usuario.role === 'ADMIN_ROLE') {
      return true;
    }else {
      console.log('Bloqueado por el admin guard');
      this._usuarioService.logout();
      return false;
    }
  }
}
