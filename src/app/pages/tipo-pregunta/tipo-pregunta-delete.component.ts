import { TipoPreguntaService } from './../../services/tipo-pregunta/tipo-pregunta.service';
import { Component, OnInit } from '@angular/core';
import { TipoPregunta } from '../../models/tipo-pregunta.model';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tipo-pregunta-delete',
  templateUrl: './tipo-pregunta-delete.component.html',
  styles: []
})
export class TipoPreguntaDeleteComponent implements OnInit {

  tipoPregunta: TipoPregunta = new TipoPregunta ('', '');

  constructor(
    public _tipoPreguntaService: TipoPreguntaService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
  ) {
    activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if ( id !== 'nuevo') {
        this.cargarTipoPregunta(id);
      }

    });
  }

  ngOnInit() {
  }

  cargarTipoPregunta(id: string) {
    this._tipoPreguntaService.obtenerTipoPregunta(id)
        .subscribe(tipoPregunta => {
          this.tipoPregunta = tipoPregunta;
        });
  }

  eliminarTipoPregunta(f: NgForm) {
    this._tipoPreguntaService.eliminarTipoPregunta(this.tipoPregunta)
          .subscribe(tipoPregunta => {
            this.router.navigate(['/tipo/preguntas']);
          });
  }

}
