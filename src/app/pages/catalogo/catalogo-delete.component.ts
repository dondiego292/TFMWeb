import { CatalogoService } from './../../services/catalogo/catalogo.service';
import { Component, OnInit } from '@angular/core';
import { CatalogoPadre } from '../../models/catalogo-padre.model';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-catalogo-delete',
  templateUrl: './catalogo-delete.component.html',
  styles: []
})
export class CatalogoDeleteComponent implements OnInit {

  catalogo: CatalogoPadre = new CatalogoPadre ('', '', '');

  constructor(
    public _catalogoService: CatalogoService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
  ) {
    activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if ( id !== 'nuevo') {
        this.cargarCatalogo(id);
      }

    });
   }

  ngOnInit() {
  }

  cargarCatalogo(id: string) {
    this._catalogoService.obtenerCatalogo(id)
        .subscribe(catalogo => {
          this.catalogo = catalogo;
        });
  }

  eliminarCatalogo(f: NgForm) {
    this._catalogoService.eliminarCatalogo(this.catalogo)
          .subscribe(catalogo => {
            this.router.navigate(['/catalogos']);
          });
  }

}
