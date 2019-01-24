import { CatalogoPadre } from './../../models/catalogo-padre.model';
import { Component, OnInit } from '@angular/core';
import { PreguntaService } from '../../services/service.index';
import { Router, ActivatedRoute } from '@angular/router';
import { Pregunta } from '../../models/pregunta.model';
import { TipoPregunta } from '../../models/tipo-pregunta.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pregunta-new',
  templateUrl: './pregunta-new.component.html',
  styles: []
})
export class PreguntaNewComponent implements OnInit {

  public id;
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
      this.pregunta.encuesta = this.id;
      this.cargarData();
    });
   }

  ngOnInit() {
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
    }
  }

  crearPregunta(f: NgForm) {
    if (f.invalid) {
      return;
    }
    if (this.pregunta.catalogoID !== '') {
      let catalogo = this.catalogos.filter(v => v._id === this.pregunta.catalogoID)[0].nombre;
      this.pregunta.catalogo = catalogo;
    } else {
      this.pregunta.catalogo = '';
    }
    this._preguntaService.crearPregunta(this.pregunta)
          .subscribe(catalogo => {
            this.router.navigate(['/preguntas/', this.id]);
          });
  }


}
