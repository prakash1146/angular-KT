import { Pipe, PipeTransform } from '@angular/core';
class Student{
  name: string;
  course: string;
  marks: number;
  DOB: Date;
  gender: string;
}
@Pipe({
  name: 'pipelimit'
})
export class PipelimitPipe implements PipeTransform {
  transform(students: Student[], limitvalue: number = 0) {
    if(students.length === 0 || limitvalue == 0 ){
        return students;
    } else {
        return students.splice(0,limitvalue) 
    }
}
}