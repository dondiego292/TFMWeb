import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { SupervisorGestorService } from '../../services/supervisor-gestor/supervisor-gestor.service';

@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.component.html',
  styles: []
})
export class SupervisorComponent implements OnInit {

  supervisores: Usuario[] = [];
  supervisoresData: Usuario[] = [];
  public loading = false;

  constructor(
    public _supervisorGestorService: SupervisorGestorService
  ) { }

  ngOnInit() {
    this.cargarSupervisores();
  }

  cargarSupervisores() {
    this.loading = true;
    this._supervisorGestorService.cargarSupervisores()
        .subscribe(supervisores => {
          this.supervisores = supervisores;
          this.supervisoresData = supervisores;
          this.loading = false;
        }, err => {
          this.loading = false;
      });
  }

  buscarSupervisor(texto: string) {
    if (texto) {
      this.supervisores = this.supervisoresData.filter(value => value.nombres.toLowerCase().indexOf(texto.toLowerCase()) !== -1 || value.apellidos.toLowerCase().indexOf(texto.toLowerCase()) !== -1);
    } else {
      this.supervisores = this.supervisoresData;
    }
  }

}
