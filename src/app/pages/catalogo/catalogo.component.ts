import { CatalogoPadre } from './../../models/catalogo-padre.model';
import { Component, OnInit } from '@angular/core';
import { CatalogoService } from '../../services/catalogo/catalogo.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styles: []
})
export class CatalogoComponent implements OnInit {

  catalogos: CatalogoPadre[] = [];

  constructor(
    public _catalogoService: CatalogoService,
  ) { }

  ngOnInit() {
    this.cargarCatalogos();
  }


  cargarCatalogos() {
    this._catalogoService.cargarCatalogos()
        .subscribe(catalogos => this.catalogos = catalogos);
  }

  buscarCatalogo( texto: string ) {
    console.log(texto);
  }

}
