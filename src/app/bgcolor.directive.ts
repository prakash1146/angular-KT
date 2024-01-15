import { Directive, ElementRef, Input, OnInit } from '@angular/core';
  // show hexadecimal also
@Directive({
  selector: '[appBgcolor]'
})
export class BgcolorDirective implements OnInit{
  @Input() colorInp : string;
  constructor(private el: ElementRef) {}

   ngOnInit(): void {
     if(this.colorInp){
      this.el.nativeElement.style.backgroundColor = this.colorInp;
     } else {
      this.el.nativeElement.style.backgroundColor = "green";
     }
   }

}
