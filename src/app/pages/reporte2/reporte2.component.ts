import { Component, OnInit } from '@angular/core';
import { ReporteService } from '../../services/reporte/reporte.service';

@Component({
  selector: 'app-reporte2',
  templateUrl: './reporte2.component.html',
  styleUrls: ['./reporte2.component.css']
})
export class Reporte2Component implements OnInit {

  public loading = false;
  datos: any[] = [];
  lat: number = 51.678418;
  lng: number = 7.809007;
  zoom: number = 13;
  public name: string = '';
  protected map: any;

  protected mapReady(map) {
    this.map = map;
  }

  constructor(
    public _reporteService: ReporteService,
  ) { }

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    this.loading = true;
    this._reporteService.cargarDatosGeolocalizacion()
        .subscribe(data => {
          this.datos = data;
          this.loading = false;
        }, err => {
          this.loading = false;
      });
  }

  getData(item) {
    this.lat = Number(item.json['latitud']);
    this.lng = Number(item.json['longitud']);
    let idCliente = item.json['client_web_id'];
    this._reporteService.cargarDatosCliente(idCliente).subscribe(data => {
      this.name = `${data.nombre} ${data.apellido}`;
      console.log(this.name);
    });

  }

  closeModal() {
    this.lat = 0;
    this.lng = 0;
  }

  public markerClicked = (markerObj) => {
    if (this.map) {
      this.map.setCenter({ lat: markerObj.latitude, lng: markerObj.longitude });
      console.log('clicked', markerObj, { lat: markerObj.latitude, lng: markerObj.longitude });
    }

  }

}
