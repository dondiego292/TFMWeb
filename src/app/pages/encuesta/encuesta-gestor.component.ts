import { Component, OnInit } from '@angular/core';
import { Gestor } from '../../models/gestor.model';
import { EncuestaGestor } from '../../models/encuesta-gestor.model';
import { Router, ActivatedRoute } from '@angular/router';
import { EncuestaGestorService } from '../../services/encuesta/encuesta-gestor.service';

declare var swal: any;
@Component({
  selector: 'app-encuesta-gestor',
  templateUrl: './encuesta-gestor.component.html',
  styles: []
})
export class EncuestaGestorComponent implements OnInit {

  public id;
  gestores: Gestor[] = [];
  gestoresAsignados: Gestor[] = [];
  public loading = false;
  gestorId: string = null;
  encuestaGestor: EncuestaGestor = new EncuestaGestor('', '', null, null);

  constructor(
    public _encuestaGestorService: EncuestaGestorService,
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
    this._encuestaGestorService.cargarGestoresAsignados(this.id).subscribe(data => {
      this.gestoresAsignados = data;
      this.encuestaGestor.encuesta = this.id;
      this.cargarGestores();
    });
  }

  cargarGestores() {
    this.loading = true;
    this._encuestaGestorService.cargarGestores(this.id)
      .subscribe(gestores => {
        this.gestores = gestores;
        // console.log(this.gestores);
        this.loading = false;
      }, err => {
        this.loading = false;
      });
  }

  rechargeData(value: string) {
    this.gestorId = value;
    this.encuestaGestor.gestor = this.gestorId;
  }

  asignarGestor() {
    if (!this.gestorId) {
      return;
    }
    this.loading = true;
    this._encuestaGestorService.crearEncuestaGestor(this.encuestaGestor)
      .subscribe(encuestaGestor => {
        this.cargarGestoresAsignados();
        this.loading = false;
        this.gestorId = null;
      }, err => {
        this.loading = false;
      });
  }

  borrarEncuestaGestor(gestor: Gestor) {
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
          this._encuestaGestorService.eliminarEncuestaGestor(this.id, gestor._id)
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
