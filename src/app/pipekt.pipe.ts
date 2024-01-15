import { Pipe, PipeTransform } from '@angular/core';
class Student{
  name: string;
  course: string;
  marks: number;
  DOB: Date;
  gender: string;
}

@Pipe({
  name: 'pipekt',
})
export class PipektPipe implements PipeTransform {
  transform(students: Student[], filterText: string) {
    console.log('Filter pipe called!');
    if(students.length === 0 || filterText === ''){
        return students;
    } else {
        return students.filter((student) => 
        { 
            return student.gender.toLowerCase() === filterText.toLowerCase()
        })
    }
  }
}