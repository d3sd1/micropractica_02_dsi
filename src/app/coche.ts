import {Modelo} from './modelo';

export class Coche {
  id: number;
  modelo: Modelo;
  inicioVenta: Date;
  precio: number;


  constructor(id: number, modelo: Modelo, inicioVenta: Date, precio: number) {
    this.id = id;
    this.modelo = modelo;
    this.inicioVenta = inicioVenta;
    this.precio = precio;
  }
}
