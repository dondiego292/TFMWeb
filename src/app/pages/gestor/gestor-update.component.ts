import { GestorService } from './../../services/gestor/gestor.service';
import { Component, OnInit } from '@angular/core';
import { Gestor } from '../../models/gestor.model';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-gestor-update',
  templateUrl: './gestor-update.component.html',
  styles: []
})
export class GestorUpdateComponent implements OnInit {

  gestor: Gestor = new Gestor ('', '', '', '' , null , null, '', '', '', 0 );
  private color: string = '';

  constructor(
    public _gestorService: GestorService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
  ) {
    activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if ( id !== 'nuevo') {
        this.cargarGestor(id);
      }

    });
   }

  ngOnInit() {
  }

  cargarGestor(id: string) {
    this._gestorService.obtenerGestor(id)
        .subscribe(gestor => {
          this.gestor = gestor;
          this.color = this.gestor.color;
        });
  }

  actualizarGestor(f: NgForm) {
    if (f.invalid) {
      return;
    }
    this.gestor.color = this.color;
    this._gestorService.actualizarGestor(this.gestor)
          .subscribe(medico => {
            this.router.navigate(['/gestor']);
          });
  }

}
