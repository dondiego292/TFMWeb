export class Regla {

  constructor (
      public pregunta: string,
      public codigoPrincipal: string,
      public codigoDependiente: string,
      public valor: string,
      public accion: string,
      public _id?: string
  ) { }

}
