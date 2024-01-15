import { Component, OnInit } from '@angular/core';

class Student{
  name: string;
  course: string;
  marks: number;
  DOB: Date;
  gender: string;
}


@Component({
  selector: 'app-pipec',
  templateUrl: './pipec.component.html',
  styleUrls: ['./pipec.component.css']
})
export class PipecComponent implements OnInit{
  title = 'AngularPipes';
  filterText:string = '';
  filteredStudents: Student[];
  students: Student[] = [
    {name: 'Mark Vought', course: 'MBA', marks: 520, DOB: new Date('11-12-1997'), gender: 'Male'},
    {name: 'Steve Smith', course: 'BTECH', marks: 420, DOB: new Date('10-06-1998'), gender: 'Male'},
    {name: 'Merry Jane', course: 'MBA', marks: 540, DOB: new Date('09-22-1996'), gender: 'Female'},
    {name: 'John Doe', course: 'BTECH', marks: 380, DOB: new Date('06-12-1995'), gender: 'Male'},
    {name: 'Sarah Smith', course: 'M.SC', marks: 430, DOB: new Date('12-21-1999'), gender: 'Female'},
    {name: 'Jonas Weber', course: 'M.SC', marks: 320, DOB: new Date('06-18-1997'), gender: 'Male'}
];

totalMarks: number = 600;
  totalStudents = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.filteredStudents.length);
    }, 2000);
  });

  // get filterText(){
  //   return this._filterText;
  // }

  // set filterText(value: string){
  //   this._filterText = value;
  //   this.filteredStudents = this.filterStudentByGender(value);
  // }

  constructor(){

  }

  ngOnInit(){
    this.filteredStudents = this.students;
  }

  AddDummyStudent(){
    this.students.push({name: 'TEST', course: 'TEST', marks: 520, DOB: new Date(), gender: 'Female'});
    console.log("----student data",this.filteredStudents)
  }

  ChangeGender(){
    this.students[0].gender = 'Female';
  }
}
