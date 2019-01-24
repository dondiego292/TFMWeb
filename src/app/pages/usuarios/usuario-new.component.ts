import { UsuarioService } from './../../services/usuario/usuario.service';
import { Usuario } from './../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-usuario-new',
  templateUrl: './usuario-new.component.html',
  styles: []
})
export class UsuarioNewComponent implements OnInit {

  usuario: Usuario = new Usuario ('', '', '', '', '', '');
  public loading = false;

  constructor(
    public _usuarioService: UsuarioService,
    public router: Router,
  ) { }

  ngOnInit() {
  }

  crearUsuario(f: NgForm) {
    this.loading = true;
    if (f.invalid) {
      return;
    }
    this._usuarioService.crearUsuario(this.usuario)
          .subscribe(medico => {
            this.loading = false;
            this.router.navigate(['/usuarios']);
          }, err => {
            this.loading = false;
        });
  }

}
