import { Encuesta } from './../../models/encuesta.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EncuestaService } from '../../services/encuesta/encuesta.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-encuesta-edit',
  templateUrl: './encuesta-edit.component.html',
  styles: []
})
export class EncuestaEditComponent implements OnInit {

  // encuesta: Encuesta;
  encuesta: Encuesta = new Encuesta ('', '', '', 0 , null , null, '' , '' , '');

  constructor(
    public _encuestaService: EncuestaService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
  ) {
    activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if ( id !== 'nuevo') {
        this.cargarEncuesta(id);
      }

    });
  }

  ngOnInit() {

  }

  cargarEncuesta(uuid: string) {
    this._encuestaService.obtenerEncuesta(uuid)
        .subscribe(encuesta => {
          this.encuesta = encuesta;
        });
  }

  actualizarEncuesta(f: NgForm) {
    if (f.invalid) {
      return;
    }
    this._encuestaService.actualizarEncuesta(this.encuesta)
          .subscribe(medico => {
            this.router.navigate(['/encuestas']);
          });
  }

}
