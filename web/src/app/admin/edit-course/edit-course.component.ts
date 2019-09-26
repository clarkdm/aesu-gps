import {Component, Input, OnInit} from '@angular/core';
import {Course, Gps} from "../../typescript-generator/typescript-generator-model";

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.less']
})
export class EditCourseComponent implements OnInit {

  @Input() course: Course;

  constructor() {
  }

  ngOnInit() {
  }

  getGps = ($event: Gps) => {
    this.course.targets.push($event)
  }
}
