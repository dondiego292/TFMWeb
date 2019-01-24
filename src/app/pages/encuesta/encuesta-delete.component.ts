import { Encuesta } from './../../models/encuesta.model';
import { Component, OnInit } from '@angular/core';
import { EncuestaService } from '../../services/encuesta/encuesta.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-encuesta-delete',
  templateUrl: './encuesta-delete.component.html',
  styles: []
})
export class EncuestaDeleteComponent implements OnInit {

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

  eliminarEncuesta(f: NgForm) {
    this._encuestaService.eliminarEncuesta(this.encuesta)
          .subscribe(encuesta => {
            this.router.navigate(['/encuestas']);
          });
  }

}
