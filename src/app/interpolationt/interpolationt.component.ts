import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolationt',
  templateUrl: './interpolationt.component.html',
  styleUrls: ['./interpolationt.component.css']
})
export class InterpolationtComponent {
  nameInterpolation = "I am interpolated String";
  age = 2;

  checkAge(){
    return this.age>18 ? "CAN VOTE USING FUNCTION " : "CAN NOT VOTE USING FUNCTION";
  }

  checkAgeHTML(){
    return this.age>18 ? "<b>CAN VOTE</b> USING FUNCTION " : "<b>CAN NOT VOTE</b> USING FUNCTION";
  }
}
