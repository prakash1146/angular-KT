import { Component } from '@angular/core';

@Component({
  selector: 'app-styleclass',
  templateUrl: './styleclass.component.html',
  styleUrls: ['./styleclass.component.css']
})
export class StyleclassComponent {
  isnot = true;
  colorFlag = true;
  isSmall = true;
  isBackgroundRed = false;
  small = 100;
  big = 150;

  getMyStyles() {
    let myStyles = {
       'color': this.colorFlag ? 'black' : 'yellow',
       'font-size.px': this.isSmall ? this.small/5 : this.big/5,
       
    };
    return myStyles;
}  
}
