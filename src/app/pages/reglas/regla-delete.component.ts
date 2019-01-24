import { Component, OnInit } from '@angular/core';
import { PreguntaService } from '../../services/service.index';
import { Router, ActivatedRoute } from '@angular/router';
import { Regla } from '../../models/regla.model';
import { ReglaService } from '../../services/regla/regla.service';
import { Pregunta } from '../../models/pregunta.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-regla-delete',
  templateUrl: './regla-delete.component.html',
  styles: []
})
export class ReglaDeleteComponent implements OnInit {

  public id;
  regla: Regla = new Regla('', '', '', '', '');
  pregunta: Pregunta[] = [];
  preguntaID: string = '';

  constructor(
    public _preguntaService: PreguntaService,
    public _reglaService: ReglaService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
  ) {
    activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.cargarRegla(this.id);
    });
  }

  ngOnInit() {
  }

  cargarRegla(id: string) {
    this._reglaService.cargarRegla(id)
        .subscribe(data => {
          this.regla = data;
          this.cargaPregunta(this.regla.pregunta);
        });
  }

  cargaPregunta(id: string) {
    this._preguntaService.obtenerPregunta(id)
      .subscribe(pregunta => {
        this.pregunta = pregunta;
        this.preguntaID = pregunta._id;
      });
  }

  eliminarRegla(f: NgForm) {
    if (f.invalid) {
      return;
    }
    this._reglaService.eliminarRegla(this.regla)
          .subscribe(regla => {
            this.router.navigate(['/reglas/', this.preguntaID]);
          });

  }

}
