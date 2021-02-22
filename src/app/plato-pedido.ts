import {Coche} from './coche';

export class PlatoPedido {
  id: number;
  plato: Coche;


  constructor(id: number, plato: Coche) {
    this.id = id;
    this.plato = plato;
  }
}
