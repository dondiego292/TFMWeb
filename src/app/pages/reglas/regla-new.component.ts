import { Component, OnInit } from '@angular/core';
import { PreguntaService } from '../../services/pregunta/pregunta.service';
import { ReglaService } from '../../services/regla/regla.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Pregunta } from '../../models/pregunta.model';
import { TipoPregunta } from '../../models/tipo-pregunta.model';
import { CatalogoPadre } from '../../models/catalogo-padre.model';
import { Regla } from '../../models/regla.model';
import { CatalogoHijoService } from '../../services/catalogo/catalogo-hijo.service';
import { CatalogoHijo } from '../../models/catalogo-hijo.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-regla-new',
  templateUrl: './regla-new.component.html',
  styles: []
})
export class ReglaNewComponent implements OnInit {

  public id: string = '';
  pregunta: Pregunta;
  preguntaRegla: Pregunta[] = [];
  preguntas: Pregunta[] = [];
  tipoPreguntas: TipoPregunta [] = [];
  catalogos: CatalogoPadre [] = [];
  regla: Regla = new Regla ('', '', '', '', '');
  catalogosHijos: CatalogoHijo [] = [];

  constructor(
    public _preguntaService: PreguntaService,
    public _catalogoHijoService: CatalogoHijoService,
    public _reglaService: ReglaService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
  ) {
    activatedRoute.params.subscribe(params => {
      this.cargarData();
      this.id = params['id'];
      if (this.id) {
        this.regla.pregunta = this.id;
        this.cargaPregunta(this.id);
      }

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

  cargaPregunta(id: string) {
    this._preguntaService.obtenerPregunta(id)
      .subscribe(pregunta => {
        this.pregunta = pregunta;
        this.cargaPreguntas(this.pregunta.encuesta);
        this.regla.codigoPrincipal = this.pregunta.uuid;
      });
  }
  cargaPreguntas(id: string) {
    this._preguntaService.cargarPreguntas(id)
      .subscribe(preguntas => {
        this.preguntas = preguntas;
        let mseleccion = this.tipoPreguntas.filter(value => value.tipo === 'mseleccion');
        let sseleccion = this.tipoPreguntas.filter(value => value.tipo === 'sseleccion');
        if (mseleccion && sseleccion) {
          this.preguntas = this.preguntas.filter(value => value._id !== this.id && (value.tipo === mseleccion[0]._id || value.tipo === sseleccion[0]._id));
        }
      });
  }

  rechargeData(value: string) {
    this.preguntaRegla = this.preguntas.filter(val => val.uuid === value);
    if (this.preguntaRegla.length > 0) {
      this._catalogoHijoService.cargarCatalogos(this.preguntaRegla[0].catalogo)
        .subscribe( data => {
          this.catalogosHijos = data;
        });
    }
  }

  crearRegla(f: NgForm) {
    if (f.invalid) {
      return;
    }
    this._reglaService.crearRegla(this.regla)
          .subscribe(catalogo => {
            this.router.navigate(['/reglas/', this.id]);
          });
  }

}
