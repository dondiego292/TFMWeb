import { TipoPregunta } from './../../models/tipo-pregunta.model';
import { Component, OnInit } from '@angular/core';
import { TipoPreguntaService } from '../../services/tipo-pregunta/tipo-pregunta.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tipo-pregunta-edit',
  templateUrl: './tipo-pregunta-edit.component.html',
  styles: []
})
export class TipoPreguntaEditComponent implements OnInit {

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

  actualizarTipoPregunta(f: NgForm) {
    if (f.invalid) {
      return;
    }
    this._tipoPreguntaService.actualizarTipoPregunta(this.tipoPregunta)
          .subscribe(tipoPregunta => {
            this.router.navigate(['/tipo/preguntas']);
          });
  }

}
