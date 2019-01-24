import { CatalogoHijo } from './../../models/catalogo-hijo.model';
import { Component, OnInit } from '@angular/core';
import { CatalogoHijoService } from '../../services/catalogo/catalogo-hijo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-catalogo-hijo-edit',
  templateUrl: './catalogo-hijo-edit.component.html',
  styles: []
})
export class CatalogoHijoEditComponent implements OnInit {

  catalogo: CatalogoHijo = new CatalogoHijo ('', '', '', '');
  public id;

  constructor(
    public _catalogoHijoService: CatalogoHijoService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
  ) {
    activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      if ( this.id !== 'nuevo') {
        this.cargarcatalogo(this.id);
      }
    });
   }

  ngOnInit() {
  }

  cargarcatalogo(id: string) {
    this._catalogoHijoService.obtenerCatalogo(id)
        .subscribe(catalogo => {
          this.catalogo = catalogo;
        });
  }

  actualizarCatalogo(f: NgForm) {
    if (f.invalid) {
      return;
    }
    this._catalogoHijoService.actualizarCatalogo(this.catalogo)
          .subscribe(catalogo => {
            this.router.navigate(['/catalogo/hijo/', this.catalogo.catalogoPadre]);
          });
  }

}
