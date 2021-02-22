import {Component, OnInit} from '@angular/core';
import {CochesMockService} from '../coches-mock.service';
import {Coche} from '../coche';
import {PlatoPedido} from '../plato-pedido';
import {PedidoService} from '../pedido.service';
import {Modelo} from '../modelo';

@Component({
  selector: 'app-comanda',
  templateUrl: './visor.component.html',
  styleUrls: ['./visor.component.scss']
})
export class VisorComponent implements OnInit {
  modelos: Modelo[] = [];
  coches: Coche[] = [];

  constructor(private cochesMockService: CochesMockService, private pedidoService: PedidoService) {
  }

  async ngOnInit() {
    this.modelos = await this.cochesMockService.getModelos();
    this.coches = await this.cochesMockService.getCoches();
  }


}
