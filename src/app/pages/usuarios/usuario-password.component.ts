import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-usuario-password',
  templateUrl: './usuario-password.component.html',
  styles: []
})
export class UsuarioPasswordComponent implements OnInit {

  public id;
  public usuario: Usuario = new Usuario ('', '', '', '', '', '');
  public loading = false;
  public password: string;
  public password2: string;
  public nombreCompleto: string;
  public usernameUser: string;

  constructor(
    public activatedRoute: ActivatedRoute,
    public _usuarioService: UsuarioService,
    public router: Router,
  ) {
    activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.cargarUsuario();
    });
   }

  ngOnInit() {

  }

  cargarUsuario() {
    this.loading = true;
    this._usuarioService.obtenerUsuario(this.id)
        .subscribe(data => {
          this.loading = false;
          this.usuario = data;
          this.nombreCompleto = `${this.usuario.nombres} ${this.usuario.apellidos}`;
          this.usernameUser = this.usuario.username;
        });
  }

  actualizarPassword() {
    this.loading = true;
    this._usuarioService.actualizarPassUsuario(this.usuario._id, this.password)
          .subscribe(usuario => {
            this.loading = false;
            this.router.navigate(['/usuarios']);
          }, err => {
            this.loading = false;
        });
  }

}
