import { AfterViewInit, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { TemplaterefParentComponent } from '../templateref-parent/templateref-parent.component';

@Component({
  selector: 'app-templatereferencevar',
  templateUrl: './templatereferencevar.component.html',
  styleUrls: ['./templatereferencevar.component.css']
})
export class TemplatereferencevarComponent implements OnInit, AfterViewInit{
  @ViewChild("myAgeVar")  public myAgeVar : ElementRef; 
  @ViewChild("spanw")  public spanw : ElementRef;
  // @ViewChild(TemplaterefParentComponent)  public refVarParentDiff : TemplaterefParentComponent; 
  @ViewChild("refVarParentDiff")  public refVarParentDiff : TemplaterefParentComponent;
  inpNameValue = "";
  inpAgeValue = "";

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.spanw.nativeElement.style.color = "red";
    console.log("--refVarParentDiff-->>",this.refVarParentDiff.checkTemplateRefvalue);

    setTimeout(() => {
      this.refVarParentDiff.checkTemplateRefvalue = false;
    }, 5000);

    setTimeout(() => {
      this.refVarParentDiff.checkTemplateRefvalue = true;
    }, 10000);
  }

  inpueValueChangeName(textVal:string){
    this.inpNameValue = textVal;
  }

  inpueValueChangeAge(){
    this.inpAgeValue = this.myAgeVar.nativeElement.value;
  }
}
