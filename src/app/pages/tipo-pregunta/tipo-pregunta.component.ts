import { TipoPreguntaService } from './../../services/tipo-pregunta/tipo-pregunta.service';
import { Component, OnInit } from '@angular/core';
import { TipoPregunta } from '../../models/tipo-pregunta.model';

@Component({
  selector: 'app-tipo-pregunta',
  templateUrl: './tipo-pregunta.component.html',
  styles: []
})
export class TipoPreguntaComponent implements OnInit {

  tipoPregunta: TipoPregunta[] = [];

  constructor(
    public _tipoPreguntaService: TipoPreguntaService
  ) { }

  ngOnInit() {
    this.cargarTiposPregunta();
  }

  cargarTiposPregunta() {
    this._tipoPreguntaService.cargarTiposPreguntas()
        .subscribe(tipoPregunta => this.tipoPregunta = tipoPregunta);
  }

  buscarTipoPregunta(texto: string) {
    console.log(texto);
  }

}
