import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {
  @Input('appResaltado') NuevoColor: string;

  constructor(private _elementRef: ElementRef) {
    console.log('directiva llamada');
    _elementRef.nativeElement.style.backgroundColor = 'yellow';

  }

  private resaltar(color: string) {
    this._elementRef.nativeElement.style.backgroundColor = color;
  }

  @HostListener('mouseenter') MouseEntrar() {
    this.resaltar(this.NuevoColor || 'yellow');
  }

  @HostListener('mouseleave') MouseSalir() {
    this.resaltar(null);
  }
}
