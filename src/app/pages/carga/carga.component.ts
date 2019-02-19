import { Component, OnInit } from '@angular/core';

import * as XLSX from 'ts-xlsx';
import { ReporteService } from '../../services/reporte/reporte.service';
declare var swal: any;

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styles: []
})
export class CargaComponent implements OnInit {

  public loading = false;
  public data: any[] = [];
  arrayBuffer: any;
  file: File;

  constructor(
    private _reporteService: ReporteService
  ) { }

  ngOnInit() {
  }

  /*
 onFileChange(evt: any) {
    const target: DataTransfer = <DataTransfer>(evt.target);
    console.log(target);
    if (target.files.length === 1 && evt.target.accept === '.xlsx' ) {
      console.log('entro');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});
      console.log(wb);
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      this.data = <any>(XLSX.utils.sheet_to_json(ws, {header: 1}));
    };
    reader.readAsBinaryString(target.files[0]);

   }
  }
uploadfile() {
    let keys = this.data.shift();
    let resArr = this.data.map((e) => {
        let obj = {};
        keys.forEach((key, i) => {
            obj[key] = e[i];
        });
        return obj;
    });
    console.log(resArr);
    const _data = {
        data: resArr
    };
    console.log(_data);
    // this.cinemaService.newoperater(_data).subscribe();
}*/

incomingfile(event) {
  this.data = [];
  this.file = event.target.files[0];
  let fileReader = new FileReader();
        fileReader.onload = (e) => {
            this.arrayBuffer = fileReader.result;
            let data = new Uint8Array(this.arrayBuffer);
            let arr = new Array();
            for (let i = 0; i !== data.length; ++i) {
              arr[i] = String.fromCharCode(data[i]);
            }
            let bstr = arr.join('');
            let workbook = XLSX.read(bstr, {type: 'binary'});
            let first_sheet_name = workbook.SheetNames[0];
            let worksheet = workbook.Sheets[first_sheet_name];
            // console.log(XLSX.utils.sheet_to_json(worksheet, {raw: true}));
            this.data = XLSX.utils.sheet_to_json(worksheet, {raw: true});
        };
        fileReader.readAsArrayBuffer(this.file);
  }

 Upload() {
   this.loading = true;
   this._reporteService.cargarDatosExcel(this.data).subscribe(data => {
     this.loading = false;
     if (data) {
      swal('Carga', 'Realizada Satisfactoriamente', 'success');
     } else {
      swal('Carga', 'Hubo un problema en la carga', 'error');
     }
     this.data = [];
   });

}

}
