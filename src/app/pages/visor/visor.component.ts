import { Component, OnInit } from '@angular/core';
import { SupervisorGestorService } from '../../services/supervisor-gestor/supervisor-gestor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Gestor } from '../../models/gestor.model';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { esLocale } from 'ngx-bootstrap/locale';
import { DatePipe } from '@angular/common';
import { RutasService } from '../../services/rutas/rutas.service';
import { Ruta } from '../../models/ruta.model';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-visor',
  templateUrl: './visor.component.html',
  styles: []
})
export class VisorComponent implements OnInit {

  public lat: number = -0.176238;
  public lng: number = -78.477931;
  public zoom: number = 10;
  public loading = false;
  public gestores: Gestor[] = [];
  public rutas: Ruta[] = [];
  public gestorId: string = null;
  public fecha: Date = new Date();
  public numberPolys: string[] = [];
  public polylines: Array<any>;
  public nombreGestor: string = '';
  public minDate = new Date(2010, 1, 1);  // yyyy-MM-dd
  public maxDate = new Date();


  constructor(
    public _supervisorGestorService: SupervisorGestorService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    private _localeService: BsLocaleService,
    private datePipe: DatePipe,
    private _rutasService: RutasService,
    private mapsAPILoader: MapsAPILoader,
    private bsConfig: BsDatepickerConfig
  ) {
    defineLocale('es', esLocale);
    this._localeService.use('es');
    // this.bsConfig = Object.assign({}, { locale: 'es' });
    activatedRoute.params.subscribe(params => {
      this.cargarGestoresAsignados();

    });
   }

  ngOnInit() {
  }

  cargarGestoresAsignados() {
    this._supervisorGestorService.cargarGestoresAsignadosPorSupervisor().subscribe(data => {
      this.gestores = data;
    });
  }

  rechargeData(value: string) {
    this.gestorId = value;
  }

  buscar() {
    if (this.gestorId === null || this.gestorId === undefined) {
      this.gestorId = '0';
    }
    let fechaString: string = this.datePipe.transform(this.fecha, 'yyyy-MM-dd');
    this._rutasService.buscarRuta(this.gestorId, fechaString).subscribe(data => {
        this.loading = true;
        this.rutas = data;
        const polys = this.rutas.map(function(obj) { return obj.Gestor; });
        this.numberPolys = polys.filter(function(v, i) { return polys.indexOf(v) === i; });
        this.polylines = this.rebuildPolylinesRutas();
        this.mapsAPILoader.load().then(() => {

        });
        this.loading = false;
      },
      error => {
        console.log(<any>error);
        this.loading = false;
      });
  }

  private rebuildPolylinesRutas() {
    let polylines = [];
    let i = 0;
    // let colores = ['blue', 'red', 'green', 'black', 'yellow', 'white', 'purple'];
    for (let gestorId of this.numberPolys) {
      let ges = this.gestores.filter(value => value._id === gestorId);
      // let newPolyline = { path: [], color: colores[i] };
      let newPolyline = { path: [], color: ges[0]['color'] };
      let routes = this.rutas.filter(value => value.Gestor === gestorId);
      if (i === 0) {
        this.lat = routes[0].Latitud;
        this.lng = routes[0].Longitud;
      }
      for (let point of routes) {
        newPolyline.path.push(point);
      }
      polylines.push(newPolyline);
      i++;
    }
    return polylines;
  }

  buscarGestor(gestorId: string) {
    let ges = this.gestores.filter(value => value._id === gestorId);
    if (ges != null) {
      this.nombreGestor = `${ges[0]['nombres']} ${ges[0]['apellidos']}`;
    } else {
      this.nombreGestor = null;
    }
  }

}
