import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EncuestaService } from '../../services/service.index';
import { Encuesta } from '../../models/encuesta.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encuesta-new',
  templateUrl: './encuesta-new.component.html',
  styles: []
})
export class EncuestaNewComponent implements OnInit {

  encuesta: Encuesta = new Encuesta ('', '', '', 0 , null , null, '' , '' , '');

  constructor(
    public _encuestaService: EncuestaService,
    public router: Router,
  ) { }

  ngOnInit() {
  }

  crearEncuesta(f: NgForm) {
    if (f.invalid) {
      return;
    }
    this._encuestaService.crearEncuesta(this.encuesta)
          .subscribe(medico => {
            this.router.navigate(['/encuestas']);
          });
  }


}
