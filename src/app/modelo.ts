import {Marca} from './marca';

export class Modelo {
    id: number;
    nombre: string;
    anyo: number;
    pvp: number;
    marca: Marca;
    fotoUrl: string;


    constructor(id: number, nombre: string, anyo: number, pvp: number, marca: Marca, fotoUrl: string = null) {
        this.id = id;
        this.nombre = nombre;
        this.anyo = anyo;
        this.pvp = pvp;
        this.marca = marca;
        this.fotoUrl = fotoUrl;
    }
}
