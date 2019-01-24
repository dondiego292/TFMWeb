import { CatalogoHijo } from './../../models/catalogo-hijo.model';
import { Component, OnInit } from '@angular/core';
import { CatalogoHijoService } from '../../services/catalogo/catalogo-hijo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-catalogo-hijo-delete',
  templateUrl: './catalogo-hijo-delete.component.html',
  styles: []
})
export class CatalogoHijoDeleteComponent implements OnInit {

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

  eliminarCatalogo(f: NgForm) {
    this._catalogoHijoService.eliminarCatalogo(this.catalogo)
          .subscribe(catalogo => {
            this.router.navigate(['/catalogo/hijo/', this.catalogo.catalogoPadre]);
          });
  }

}
