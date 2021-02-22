import {Injectable} from '@angular/core';
import {PlatoPedido} from './plato-pedido';
import {Coche} from './coche';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private lastInsertedId: number = 0;

  constructor() {
  }

  addPlatoAlPedido(plato: Coche): Promise<PlatoPedido> {
    return new Promise((resolve) => {
      resolve(new PlatoPedido(this.lastInsertedId++, plato));
    });
  }
}
