import { Component, OnInit } from '@angular/core';
import { CatalogoPadre } from '../../models/catalogo-padre.model';
import { CatalogoService } from '../../services/catalogo/catalogo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-catalogo-edit',
  templateUrl: './catalogo-edit.component.html',
  styles: []
})
export class CatalogoEditComponent implements OnInit {

  catalogo: CatalogoPadre = new CatalogoPadre ('', '', '');

  constructor(
    public _catalogoService: CatalogoService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
  ) {
    activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if ( id !== 'nuevo') {
        this.cargarcatalogo(id);
      }

    });
  }

  ngOnInit() {
  }

  cargarcatalogo(id: string) {
    this._catalogoService.obtenerCatalogo(id)
        .subscribe(catalogo => {
          this.catalogo = catalogo;
        });
  }

  actualizarCatalogo(f: NgForm) {
    if (f.invalid) {
      return;
    }
    this._catalogoService.actualizarCatalogo(this.catalogo)
          .subscribe(catalogo => {
            this.router.navigate(['/catalogos']);
          });
  }

}
