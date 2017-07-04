import {Directive, ElementRef, Input, OnInit, Renderer2} from "@angular/core";

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit {
  @Input("appColor") appColor: string;

  constructor(private renderer: Renderer2, private el: ElementRef) {
  }

  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, this.appColor != null ? "app-" + this.appColor : 'app-accent');
  }
}
