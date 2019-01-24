import { Component, OnInit } from '@angular/core';
import { EncuestaService } from '../../services/encuesta/encuesta.service';
import { Encuesta } from '../../models/encuesta.model';

declare var swal: any;

@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styles: []
})
export class EncuestasComponent implements OnInit {

  encuestas: Encuesta[] = [];
  public loading = false;

  constructor(
    public _encuestaService: EncuestaService
  ) { }

  ngOnInit() {
    this.cargarEncuestas();
  }

  cargarEncuestas() {
    this.loading = true;
    this._encuestaService.cargarEncuestas()
        .subscribe(encuestas => {
          this.encuestas = encuestas;
          this.loading = false;
        }, err => {
          this.loading = false;
      });
  }

  buscarEncuesta(texto: string) {
    console.log(texto);
  }


  publicarEncuesta(encuesta: Encuesta) {
    swal({
      title: '¿Esta seguro?',
      text: 'Está seguro de publicar: ' + encuesta.nombre,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
    .then(publicar => {
      if (publicar) {
        this._encuestaService.publicarEncuesta(encuesta)
              .subscribe( borrado => {
                // console.log(borrado);
                this.cargarEncuestas();
              });
      }
    });
  }

  despublicarEncuesta(encuesta: Encuesta) {
    swal({
      title: '¿Esta seguro?',
      text: 'Está seguro de despublicar: ' + encuesta.nombre,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
    .then(despublicar => {
      if (despublicar) {
        this._encuestaService.despublicarEncuesta(encuesta)
              .subscribe( borrado => {
                // console.log(borrado);
                this.cargarEncuestas();
              });
      }
    });
  }

}
