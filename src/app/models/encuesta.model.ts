export class Encuesta {

  constructor (
      public tipo: string,
      public nombre: string,
      public uuid: string,
      public estado: number,
      public fechaCreacion: Date,
      public fechaActualizacion: Date,
      public etiqueta: string,
      public libre: string,
      public descripcion: string,
      public _id?: string
  ) { }

}
