import { Component } from '@angular/core';

@Component({
  selector: 'app-showhiddenif',
  templateUrl: './showhiddenif.component.html',
  styleUrls: ['./showhiddenif.component.css']
})
export class ShowhiddenifComponent {
  valBooleanvariable = true;
  experience = 15 ;
  num = 1;
  valBooleanAgeFunction() : boolean{
    return this.experience > 5;
  }

}
