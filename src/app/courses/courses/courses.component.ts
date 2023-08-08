import { Component } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  courses: Course[] = [
    { _id: '1', nome: 'Tec Dev Fullstack', categoria: 'Web' },
    { _id: '2', nome: 'Tec Dev Flutter', categoria: 'Mobile' },
  ];
  displayedColumns = ['nome', 'categoria'];
}
