import { Component } from '@angular/core';

@Component({
  selector: 'app-propertyattribute',
  templateUrl: './propertyattribute.component.html',
  styleUrls: ['./propertyattribute.component.css']
})
export class PropertyattributeComponent {
  imagescr1 = './assets/images/republic_day2.jpg';
  imagescr2 = './assets/images/independence-day-feature.webp';

  imageRep(val:any){
    alert("I have clicked Image of   --- "+ val);
  }

  imageInd(val:any){
    alert("I have clicked Image of   --- "+ val);
  }
}
