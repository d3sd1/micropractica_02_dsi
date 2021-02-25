import {Injectable} from '@angular/core';
import {Coche} from './coche';
import {Marca} from './marca';
import {Modelo} from './modelo';

@Injectable({
    providedIn: 'root'
})
export class CochesMockService {

    // This should be fetched from an API ;) <- AVAILABLE BRANDS
    private hardcodedMarcas: Marca[] = [
        new Marca(1, 'RENAULT'),
        new Marca(2, 'SEAT'),
        new Marca(3, 'TESLA')
    ];

    // This should be fetched from an API ;) <- AVAILABLE MODELS FROM A BRAND, OEM DATA
    private hardcodedModelos: Modelo[] = [
        new Modelo(1, 'scenic', 2007, 6050, this.hardcodedMarcas[0], 'assets/coches/renault_scenic_2007.png'),
        new Modelo(2, 'ibiza', 2003, 1452, this.hardcodedMarcas[1], 'assets/coches/seat_ibiza_2003.png'),
        new Modelo(3, 'megane', 2007, 4235, this.hardcodedMarcas[0], 'assets/coches/renault_megane_2007.png'),
        new Modelo(4, 'model 3', 2007, 4840, this.hardcodedMarcas[2], null),
    ];

    // This should be fetched from an API ;) <- AVAILABLE CARS TO SELL, STOCK CARS
    private hardcodedCoches: Coche[] = [
        new Coche(1, this.hardcodedModelos[0], new Date('2018-04-01'), 5000),
        new Coche(2, this.hardcodedModelos[1], new Date('2018-03-01'), 1300),
        new Coche(3, this.hardcodedModelos[2], new Date('2018-03-01'), 3500),
        new Coche(4, this.hardcodedModelos[3], new Date('2018-03-01'), 4000)
    ];

    constructor() {
    }

    getMarcas(): Promise<Marca[]> {
        return new Promise((resolve) => {
            resolve(this.hardcodedMarcas);
        });
    }

    getModelos(): Promise<Modelo[]> {
        return new Promise((resolve) => {
            resolve(this.hardcodedModelos);
        });
    }

    getCoches(): Promise<Coche[]> {
        return new Promise((resolve) => {
            resolve(this.hardcodedCoches);
        });
    }

    rebajar(coche: Coche, cantidad: number) {
        this.hardcodedCoches.find((cocheDB: Coche) => {
            if (coche.id === cocheDB.id) {
                cocheDB.precio -= cantidad;
                return;
            }
        });
    }

    marcarVendido(coche: Coche) {
        this.hardcodedCoches.find((cocheDB: Coche) => {
            if (coche.id === cocheDB.id) {
                cocheDB.vendido = true;
                return;
            }
        });
    }
}
