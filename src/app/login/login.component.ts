import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';
import { element } from 'protractor';

declare function ini_plugins();
declare const gapi: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  recuerdame: boolean = false;
  email: string;

  auth2: any;

  constructor(
    public router: Router,
    public _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    ini_plugins();
    this.googleInit();

    this.email = localStorage.getItem('email') || '';
    if (this.email.length > 1) {
      this.recuerdame = true;
    }
  }

  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '324376359328-1avb41o1frjpcbilda8hv5s0q5b7ugff.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email',
      });
      this.attachSignin(document.getElementById('btnGoogle'));
    });
  }

  attachSignin(element) {
    this.auth2.attachClickHandler(element, {}, (googleUser) => {
      // let profile = googleUser.getBasicProfile();
      // console.log(profile);
      let token = googleUser.getAuthResponse().id_token;
      this._usuarioService.loginGoogle(token)
          .subscribe(() => window.location.href = '#/dashboard' );
    });
  }

  ingresar( forma: NgForm) {
    if (forma.invalid) {
      return;
    }
    let usuario = new Usuario(
      forma.value.username,
      null,
      null,
      null,
      null,
      forma.value.password
    );
    this._usuarioService.login(usuario, this.recuerdame)
      .subscribe( correcto => this.router.navigate(['/encuestas']));
    // this.router.navigate(['/dashboard']);
  }

}
