import {Component, OnInit} from '@angular/core';
import {CochesMockService} from '../coches-mock.service';
import {Coche} from '../coche';
import {PlatoPedido} from '../plato-pedido';
import {PedidoService} from '../pedido.service';
import {Modelo} from '../modelo';
import {CANTIDAD_REBAJA_EUR} from '../util/Constants';

@Component({
    selector: 'app-comanda',
    templateUrl: './visor.component.html',
    styleUrls: ['./visor.component.scss']
})
export class VisorComponent implements OnInit {
    modelos: Modelo[] = [];
    coches: Coche[] = []; // <- originales api
    cochesTabla: Coche[] = []; // <- mostrados en tabla
    filterBy: string = "";

    constructor(private cochesMockService: CochesMockService, private pedidoService: PedidoService) {
    }

    async ngOnInit() {
        this.modelos = await this.cochesMockService.getModelos();
        this.coches = await this.cochesMockService.getCoches();
        this.cochesTabla = this.coches;
    }

    filterTable() {
        let filteredData = this.coches.filter((coche: Coche) => {
            return coche.modelo.marca.nombre.toLowerCase().includes(this.filterBy.toLowerCase());
        });
        if (this.filterBy == '') {
            filteredData = this.coches;
        }
        this.cochesTabla = filteredData;
    }

    rebajar(coche: Coche) {
        this.cochesMockService.rebajar(coche, CANTIDAD_REBAJA_EUR);
    }

    marcarVendido(coche: Coche) {
        this.cochesMockService.marcarVendido(coche);
    }


}
