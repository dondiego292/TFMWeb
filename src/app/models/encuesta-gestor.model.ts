export class EncuestaGestor {

  constructor (
      public encuesta: string,
      public gestor: string,
      public fechaCreacion: Date,
      public fechaActualizacion: Date,
      public _id?: string
  ) { }

}
