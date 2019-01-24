import { Component, OnInit } from '@angular/core';
import { Gestor } from '../../models/gestor.model';
import { GestorService } from '../../services/gestor/gestor.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario/usuario.service';
import {ColorPickerService} from 'narik-angular-color-picker';

@Component({
  selector: 'app-gestor-new',
  templateUrl: './gestor-new.component.html',
  styles: []
})
export class GestorNewComponent implements OnInit {

  gestor: Gestor = new Gestor ('', '', '', '' , null , null, '', '', '', 0 );
  usuarios: Usuario[] = [];
  loading: boolean = true;
  usuario: Usuario[];
  private color: string = '#127bdc';

  constructor(
    public _gestorService: GestorService,
    public _usuarioService: UsuarioService,
    public router: Router,
    private cpService: ColorPickerService
  ) { }

  ngOnInit() {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.loading = true;
    this._usuarioService.cargarTodosUsuarios()
        .subscribe( (resp: any) => {
          this.usuarios = resp.usuarios;
          this.loading = false;
        }, err => {
          this.loading = false;
      });
  }

  crearGestor(f: NgForm) {
    if (f.invalid) {
      return;
    }
    this.gestor.color = this.color;
    this._gestorService.crearGestor(this.gestor)
          .subscribe(gestor => {
            this.router.navigate(['/gestor']);
          });
  }

  rechargeData(value: string) {
    this.usuario = this.usuarios.filter(v => v._id === value);
    if (this.usuario.length > 0) {
      this.gestor.usuario = this.usuario[0]._id;
      this.gestor.nombres = this.usuario[0].nombres;
      this.gestor.apellidos = this.usuario[0].apellidos;
      this.gestor.nickname = this.usuario[0].username;
    } else {
      this.gestor.usuario = '';
      this.gestor.nombres = '';
      this.gestor.apellidos = '';
      this.gestor.nickname = '';
    }
  }

}
