import { Component, OnInit } from '@angular/core';
import { PreguntaService, ReglaService } from '../../services/service.index';
import { Router, ActivatedRoute } from '@angular/router';
import { Pregunta } from '../../models/pregunta.model';
import { Regla } from '../../models/regla.model';

@Component({
  selector: 'app-reglas',
  templateUrl: './reglas.component.html',
  styles: []
})
export class ReglasComponent implements OnInit {

  public id: string = '';
  pregunta: Pregunta;
  preguntas: Pregunta[] = [];
  reglas: Regla[] = [];
  encuesta: string = '';

  constructor(
    public _preguntaService: PreguntaService,
    public _reglaService: ReglaService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
  ) {
    activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.cargarReglas(this.id);
      }

    });
   }

  ngOnInit() {
  }

  cargarReglas(id: string) {
    this._reglaService.cargarReglas(id)
      .subscribe(reglas => {
        this.reglas = reglas;
        this.cargaPregunta(this.id);
      });
  }


  cargaPregunta(id: string) {
    this._preguntaService.obtenerPregunta(id)
      .subscribe(pregunta => {
        this.pregunta = pregunta;
        this.cargaPreguntas(this.pregunta.encuesta);
        this.encuesta = this.pregunta.encuesta;
      });
  }


  cargaPreguntas(id: string) {
    this._preguntaService.cargarPreguntas(id)
      .subscribe(preguntas => {
        this.preguntas = preguntas;
      });
  }

  getDependentName(uuid: string) {
    if (!uuid) {
      return '';
    } else {
      let preg = this.preguntas.filter(value => value.uuid === uuid);
      if (preg.length > 0) {
        return preg[0].texto;
      } else {
        return '';
      }
    }
  }


}
