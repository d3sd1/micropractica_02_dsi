import {Modelo} from './modelo';

export class Coche {
  id: number;
  modelo: Modelo;
  inicioVenta: Date;
  precio: number;
  vendido: boolean;


  constructor(id: number, modelo: Modelo, inicioVenta: Date, precio: number, vendido: boolean = false) {
    this.id = id;
    this.modelo = modelo;
    this.inicioVenta = inicioVenta;
    this.precio = precio;
    this.vendido = vendido;
  }
}
