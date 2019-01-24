import { Component, OnInit } from '@angular/core';
import { CatalogoHijoService } from '../../services/catalogo/catalogo-hijo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CatalogoHijo } from '../../models/catalogo-hijo.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-catalogo-hijo-new',
  templateUrl: './catalogo-hijo-new.component.html',
  styles: []
})
export class CatalogoHijoNewComponent implements OnInit {

  catalogo: CatalogoHijo = new CatalogoHijo ('', '', '', '');
  public id;

  constructor(
    public _catalogoHijoService: CatalogoHijoService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
  ) {
    activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.catalogo.catalogoPadre = this.id;
    });
   }

  ngOnInit() {
  }

  crearCatalogo(f: NgForm) {
    if (f.invalid) {
      return;
    }
    this._catalogoHijoService.crearCatalogo(this.catalogo)
          .subscribe(catalogo => {
            this.router.navigate(['/catalogo/hijo/', this.id]);
          });
  }

}
