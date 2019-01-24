
export class Usuario {

  /*constructor(
    public nombre: string,
    public email: string,
    public password: string,
    public img?: string,
    public role?: string,
    public google?: boolean,
    public _id?: string
  ) {}*/

  constructor(
    public username: string,
    public dni: string,
    public nombres: string,
    public apellidos: string,
    public email: string,
    public password: string,
    public img?: string,
    public role?: string,
    public _id?: string
  ) {}

}
