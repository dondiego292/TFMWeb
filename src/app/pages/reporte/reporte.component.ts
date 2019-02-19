import { Component, OnInit } from '@angular/core';
import { ReporteService } from '../../services/reporte/reporte.service';
import { DomSanitizer } from '@angular/platform-browser';




@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styles: []
})
export class ReporteComponent implements OnInit {

  public loading = false;
  datos: any[] = [];
  public photo: any = null;
  public name: string = '';


  constructor(
    public _reporteService: ReporteService,
    public _DomSanitizer: DomSanitizer,
  ) { }

  ngOnInit() {
    this.cargarDatos();
  }


  cargarDatos() {
    this.loading = true;
    this._reporteService.cargarDatos()
        .subscribe(data => {
          this.datos = data;
          this.loading = false;
        }, err => {
          this.loading = false;
      });
  }

  getImage(item: any) {
    this.name = item.json['nombre'];
    this._reporteService.cargarImagen(item._id)
        .subscribe(data => {
          if (data.ok && data.image !== undefined) {
            this.photo = this._DomSanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + data.image);
          } else {
            this.photo = null;
          }

          this.loading = false;
        }, err => {
          this.loading = false;
      });
  }

  closeModal() {
    this.photo = null;
    this.name = '';
  }





}
