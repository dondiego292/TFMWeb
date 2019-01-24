import { Component, OnInit } from '@angular/core';
import { CatalogoHijoService } from '../../services/catalogo/catalogo-hijo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CatalogoHijo } from '../../models/catalogo-hijo.model';

@Component({
  selector: 'app-catalogo-hijo',
  templateUrl: './catalogo-hijo.component.html',
  styles: []
})
export class CatalogoHijoComponent implements OnInit {

  catalogos: CatalogoHijo[] = [];
  public id;


  constructor(
    public _catalogoHijoService: CatalogoHijoService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
  ) {
    activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      if ( this.id !== 'nuevo') {
        this.cargarCatalogos(this.id);
      }

    });
  }

  cargarCatalogos(id: string) {
    this._catalogoHijoService.cargarCatalogos(id)
        .subscribe(catalogos => this.catalogos = catalogos);
  }

  ngOnInit() {
  }

}
