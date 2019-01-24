
export class Ruta {

  constructor(
    public Device: string,
    public Latitud: number,
    public Longitud: number,
    public UUID: string,
    public Altitud: number,
    public Accuracy: number,
    public StartDate: Date,
    public StartTime: string,
    public EndTime: number,
    public Bateria: number,
    public Gestor: string,
    public _id?: string

  ) {}

}
