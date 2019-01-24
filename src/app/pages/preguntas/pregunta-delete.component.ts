import { Component, OnInit } from '@angular/core';
import { Pregunta } from '../../models/pregunta.model';
import { TipoPregunta } from '../../models/tipo-pregunta.model';
import { CatalogoPadre } from '../../models/catalogo-padre.model';
import { PreguntaService } from '../../services/service.index';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pregunta-delete',
  templateUrl: './pregunta-delete.component.html',
  styles: []
})
export class PreguntaDeleteComponent implements OnInit {

  public id;
  encuesta: string = '';
  pregunta: Pregunta = new Pregunta ('', '', '', false, '', 0, '', '', '', '');
  tipoPreguntas: TipoPregunta [] = [];
  tipoPregunta: TipoPregunta [] = [];
  catalogos: CatalogoPadre [] = [];
  showCatalogo: boolean = false;

  constructor(
    public _preguntaService: PreguntaService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
  ) {
    activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.cargarData();
      this.cargarPregunta(this.id);
    });
   }

  ngOnInit() {
  }

  cargarPregunta(id: string) {
    this._preguntaService.obtenerPregunta(id)
        .subscribe(data => {
          this.pregunta = data;
          this.encuesta = data.encuesta;
          this.rechargeData(data.tipo);
        });
  }

  cargarData() {
    this._preguntaService.cargarData()
        .subscribe(data => {
          this.tipoPreguntas = data.tipoPreguntas;
          this.catalogos = data.catalogos;
        });
  }

  rechargeData(value: string) {
    this.tipoPregunta = this.tipoPreguntas.filter(v => v._id === value);
    if (this.tipoPregunta[0]['tipo'] === 'mseleccion' || this.tipoPregunta[0]['tipo'] === 'sseleccion') {
      this.showCatalogo = true;
    } else {
      this.showCatalogo = false;
      this.pregunta.catalogo = '';
    }
  }

  eliminarPregunta(f: NgForm) {
    if (f.invalid) {
      return;
    }
    this._preguntaService.eliminarPregunta(this.pregunta)
          .subscribe(catalogo => {
            this.router.navigate(['/preguntas/', this.encuesta]);
          });
  }

}
