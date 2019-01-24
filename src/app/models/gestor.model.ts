export class Gestor {

  constructor (
      public usuario: string,
      public apellidos: string,
      public nombres: string,
      public imei: string,
      public fechaCreacion: Date,
      public fechaActualizacion: Date,
      public token: string,
      public nickname: string,
      public color: string,
      public fueraServicio: number,
      public _id?: string
  ) { }

}
