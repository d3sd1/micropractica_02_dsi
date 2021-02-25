import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[appPlaceholderImagen]'
})
export class PlaceholderImagenDirective {

    @Input() src;

    constructor(private imageRef: ElementRef) {
    }

    ngAfterViewInit(): void {
        const img = new Image();
        img.onload = () => {
            this.setImage(this.src);
        };

        img.onerror = () => {
            // Set a placeholder image
            this.setImage('assets/coches/no-img.png');
        };

        img.src = this.src;
    }

    private setImage(src: string) {
        this.imageRef.nativeElement.setAttribute('src', src);
    }

}
