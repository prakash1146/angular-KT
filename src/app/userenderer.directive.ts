import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '.appUserenderer'
})
export class UserendererDirective implements OnInit{
  @HostBinding('style.backgroundColor') backgroundcolor : string = "#fffccc";
  @HostBinding('style.color') colorelem : string = "#ffffff";


  constructor(private el:Renderer2,private el2:ElementRef) { }
  @HostListener('mouseenter') mouseenter (){
    this.el.addClass(this.el2.nativeElement,'scaleit');
  }

  @HostListener('mouseout') mouseout (){
    this.el.removeClass(this.el2.nativeElement,'scaleit');
  }
  ngOnInit(): void {
    this.el.addClass(this.el2.nativeElement,'highlight');
   
    // this.el.setStyle(this.el2.nativeElement,'background-color','red');
    // this.el.setAttribute(this.el2.nativeElement,'title','I am using title');
  }

}
