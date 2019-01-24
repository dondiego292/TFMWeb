import { Component, OnInit } from '@angular/core';
import { Gestor } from '../../models/gestor.model';
import { GestorService } from '../../services/gestor/gestor.service';

declare var swal: any;

@Component({
  selector: 'app-gestor',
  templateUrl: './gestor.component.html',
  styles: []
})
export class GestorComponent implements OnInit {

  gestoresData: Gestor[] = [];
  gestores: Gestor[] = [];
  public loading = false;

  constructor(
    public _gestorService: GestorService
  ) { }

  ngOnInit() {
    this.cargarGestores();
  }

  cargarGestores() {
    this.loading = true;
    this._gestorService.cargarGestores()
        .subscribe(gestores => {
          this.gestores = gestores;
          this.gestoresData = gestores;
          this.loading = false;
        }, err => {
          this.loading = false;
      });
  }

  buscarGestor(texto: string) {
    if (texto) {
      this.gestores = this.gestoresData.filter(value => value.nombres.toLowerCase().indexOf(texto.toLowerCase()) !== -1 || value.apellidos.toLowerCase().indexOf(texto.toLowerCase()) !== -1);
    } else {
      this.gestores = this.gestoresData;
    }

  }

  borrarGestor(gestor: Gestor) {
    swal({
      title: '¿Esta seguro?',
      text: 'Esta a punto de borrar a: ' + gestor.nombres + ' ' + gestor.apellidos ,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
    .then(borrar => {
      if (borrar) {
        this._gestorService.eliminarGestor(gestor)
              .subscribe( borrado => {
                // console.log(borrado);
                this.cargarGestores();
              });
      }
    });
  }

}
