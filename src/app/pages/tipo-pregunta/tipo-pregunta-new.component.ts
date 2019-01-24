import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TipoPregunta } from '../../models/tipo-pregunta.model';
import { TipoPreguntaService } from '../../services/tipo-pregunta/tipo-pregunta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipo-pregunta-new',
  templateUrl: './tipo-pregunta-new.component.html',
  styles: []
})
export class TipoPreguntaNewComponent implements OnInit {

  tipoPregunta: TipoPregunta = new TipoPregunta ('', '');

  constructor(
    public _tipoPreguntaService: TipoPreguntaService,
    public router: Router,
  ) { }

  ngOnInit() {
  }

  crearTipoPregunta(f: NgForm) {
    if (f.invalid) {
      return;
    }
    this._tipoPreguntaService.crearTipoPregunta(this.tipoPregunta)
          .subscribe(medico => {
            this.router.navigate(['/tipo/preguntas']);
          });
  }


}
