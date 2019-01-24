import { UsuarioService } from './../usuario/usuario.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginGuardGuard implements CanActivate {

  constructor(
    public _usuarioService: UsuarioService,
    public router: Router
  ) {

  }

  canActivate(): boolean {
    // console.log('Paso por el login guard');
    if (this._usuarioService.estaLogueado()) {
      // console.log('Paso el guard');
      return true;
    }else {
      console.log('Bloqueado por  el guard');
      this.router.navigate(['/login']);
      return false;
    }

  }
}
