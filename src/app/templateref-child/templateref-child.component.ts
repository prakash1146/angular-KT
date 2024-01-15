import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { TemplaterefParentComponent } from '../templateref-parent/templateref-parent.component';

@Component({
  selector: 'app-templateref-child',
  templateUrl: './templateref-child.component.html',
})
export class TemplaterefChildComponent implements OnInit{
  @Input() parentComp : TemplaterefParentComponent;

  ngOnInit(): void {
    console.log("ppp--111--->",this.parentComp)
  }
}
