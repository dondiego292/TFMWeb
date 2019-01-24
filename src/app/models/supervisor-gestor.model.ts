export class SupervisorGestor {

  constructor (
      public usuario: string,
      public gestor: string,
      public fechaCreacion: Date,
      public fechaActualizacion: Date,
      public _id?: string
  ) { }

}
