export class CatalogoHijo {

  constructor (
      public nombre: string,
      public codigo: string,
      public valor: string,
      public catalogoPadre: string,
      public _id?: string
  ) { }

}
