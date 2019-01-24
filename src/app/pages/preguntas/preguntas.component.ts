import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PreguntaService } from '../../services/pregunta/pregunta.service';
import { Pregunta } from '../../models/pregunta.model';
import { CatalogoPadre } from '../../models/catalogo-padre.model';
import { TipoPregunta } from '../../models/tipo-pregunta.model';


@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styles: []
})
export class PreguntasComponent implements OnInit {

  public id: string = '';
  preguntas: Pregunta[] = [];
  catalogos: CatalogoPadre[] = [];
  tipoPreguntas: TipoPregunta [] = [];
  listOne: Array<string> = ['Coffee', 'Orange Juice', 'Red Wine', 'Unhealty drink!', 'Water'];
  public loading = false;

  constructor(
    public _preguntaService: PreguntaService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
  ) {
    activatedRoute.params.subscribe(params => {
      this._preguntaService.cargarData().subscribe(data => {
        this.catalogos = data.catalogos;
        this.tipoPreguntas = data.tipoPreguntas;
      });
      this.id = params['id'];
      if (this.id !== '') {
        this.cargarPreguntas(this.id);
      }

    });

  }

  ngOnInit() {


  }

  orderedProduct(event) {
    console.log(event);
  }

  cargarPreguntas(id: string) {
    this.loading = true;
    this._preguntaService.cargarPreguntas(id)
      .subscribe(preguntas => {
        // console.log(preguntas);
        this.preguntas = preguntas;
        this.loading = false;
      }, err => {
        this.loading = false;
    });
  }

  getCatalogoName(id: string) {
    if (!id) {
      return '';
    } else {
      let catalogo = this.catalogos.filter(value => value._id === id);
      if (catalogo.length > 0) {
        return catalogo[0].nombre;
      } else {
        return '';
      }
    }
  }

  getTipoPreguntaName(id: string) {
    if (!id) {
      return '';
    } else {
      let tipoPregunta = this.tipoPreguntas.filter(value => value._id === id);
      if (tipoPregunta.length > 0) {
        return tipoPregunta[0].nombre;
      } else {
        return '';
      }
    }
  }

}
