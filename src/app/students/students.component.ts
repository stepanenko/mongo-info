
import { Component, OnInit } from '@angular/core';

import { StudentService } from '../services/student.service';
import { Student } from '../student';

@Component({
  selector: 'app-students',
  template: `
    <h2>Students List</h2>
    <ul>
      <li *ngFor="let car of cars">
        Make: {{ car.make }}, Model: {{ car.model }}
      </li>
    </ul>

    <ul>
      <li *ngFor="let student of students">
        {{ student.name + ' ' + student.surname }}
      </li>
    </ul>
  `
})
export class StudentsComponent implements OnInit {

  students: Student[];
  cars;

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.getStudents();
    this.getCars();
  }

  getCars(): void {
    this.studentService.getCars()
      .subscribe((cars) => this.cars = cars);
  }
  getStudents(): void {
    this.studentService.getStudents()
      .subscribe((students) => this.students = students);
  }
}
