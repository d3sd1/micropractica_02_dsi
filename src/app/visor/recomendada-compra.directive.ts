import {Directive, ElementRef, Input} from '@angular/core';
import {Coche} from '../coche';
import {PORCENTAJE_MAXIMO_COMPRA_RECOMENDADA} from '../util/Constants';

@Directive({
    selector: '[cocheRecomendadaCompra]'
})
export class RecomendadaCompraDirective {
    @Input("coche") coche: Coche;

    constructor(private el: ElementRef) {

    }

    private isCompraRecomendada(): boolean {
        return (this.coche.precio / this.coche.modelo.pvp) < PORCENTAJE_MAXIMO_COMPRA_RECOMENDADA;
    }

    ngOnInit() {
        this.el.nativeElement.style.backgroundColor = this.isCompraRecomendada() ? 'green' : 'red';
    }
}
