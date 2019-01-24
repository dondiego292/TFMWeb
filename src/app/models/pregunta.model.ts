export class Pregunta {

  constructor (
      public encuesta: string,
      public texto: string,
      public etiqueta: string,
      public obligatorio: Boolean,
      public tipo: string,
      public posicion: Number,
      public catalogoID: string,
      public catalogo: string,
      public expresion: string,
      public uuid: string,
      public _id?: string
  ) { }

}
