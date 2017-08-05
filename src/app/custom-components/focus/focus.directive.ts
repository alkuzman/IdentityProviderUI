import {AfterViewInit, Directive, ElementRef, Inject, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements AfterViewInit {

  constructor(@Inject(ElementRef) private element: ElementRef, private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {
    this.element.nativeElement.focus();
  }
}
