import { Component, OnInit } from '@angular/core';
import { SupervisorGestorService } from '../../services/supervisor-gestor/supervisor-gestor.service';
import { Usuario } from '../../models/usuario.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SupervisorGestor } from '../../models/supervisor-gestor.model';
import { Gestor } from '../../models/gestor.model';
declare var swal: any;

@Component({
  selector: 'app-supervisor-asignacion',
  templateUrl: './supervisor-asignacion.component.html',
  styles: []
})
export class SupervisorAsignacionComponent implements OnInit {

  public id;
  gestores: Gestor[] = [];
  gestoresAsignados: Gestor[] = [];
  public loading = false;
  gestorId: string = null;
  supervisorGestor: SupervisorGestor = new SupervisorGestor('', '', null, null);

  constructor(
    public _supervisorGestorService: SupervisorGestorService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.cargarGestoresAsignados();

    });
  }

  ngOnInit() {


  }

  cargarGestoresAsignados() {
    this._supervisorGestorService.cargarGestoresAsignados(this.id).subscribe(data => {
      this.gestoresAsignados = data;
      this.supervisorGestor.usuario = this.id;
      this.cargarGestores();
    });
  }

  cargarGestores() {
    this.loading = true;
    this._supervisorGestorService.cargarGestores()
      .subscribe(gestores => {
        this.gestores = gestores;
        this.loading = false;
      }, err => {
        this.loading = false;
      });
  }

  rechargeData(value: string) {
    this.gestorId = value;
    this.supervisorGestor.gestor = this.gestorId;
  }

  asignarGestor() {
    if (!this.gestorId) {
      return;
    }
    this.loading = true;
    this._supervisorGestorService.crearSuperviorGestor(this.supervisorGestor)
      .subscribe(supervisorGestor => {
        this.cargarGestoresAsignados();
        this.loading = false;
        this.gestorId = null;
      }, err => {
        this.loading = false;
      });
  }

  borrarSupervisorGestor(gestor: Gestor) {
    this.loading = true;
    swal({
      title: '¿Esta seguro?',
      text: 'Esta a punto de borrar a: ' + gestor.nombres + ' ' + gestor.apellidos,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
      .then(borrar => {
        if (borrar) {
          this._supervisorGestorService.eliminarSupervisorGestor(this.id, gestor._id)
            .subscribe(borrado => {
              // console.log(borrado);
              this.cargarGestoresAsignados();
              this.loading = false;
            }, err => {
              this.loading = false;
            });
        }
      });
  }

}
