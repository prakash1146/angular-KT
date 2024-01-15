import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostbindd]'
})
export class HostbinddDirective {

  @HostBinding('style.backgroundColor') backgroundcolor : string = "white";
  @HostBinding('style.color') colorelem : string = "black";
  @HostBinding('style.border') borderlem : string = "3px solid red";


  constructor(private el:Renderer2,private el2:ElementRef) { }
  @HostListener('mouseenter') mouseenter (){
    this.backgroundcolor = "pink";
    this.colorelem = "purple";
    this.borderlem = "3px solid blue";
  }

  @HostListener('mouseout') mouseout (){
    this.backgroundcolor = "white";
    this.colorelem = "black";
    this.borderlem = "3px solid red";
  }
  

}
