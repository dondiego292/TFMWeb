import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CatalogoPadre } from '../../models/catalogo-padre.model';
import { CatalogoService } from '../../services/catalogo/catalogo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo-new',
  templateUrl: './catalogo-new.component.html',
  styles: []
})
export class CatalogoNewComponent implements OnInit {

  catalogo: CatalogoPadre = new CatalogoPadre ('', '', '');

  constructor(
    public _catalogoService: CatalogoService,
    public router: Router,
  ) { }

  ngOnInit() {
  }


  crearCatalogo(f: NgForm) {
    if (f.invalid) {
      return;
    }
    this._catalogoService.crearCatalogo(this.catalogo)
          .subscribe(catalogo => {
            this.router.navigate(['/catalogos']);
          });
  }

}
