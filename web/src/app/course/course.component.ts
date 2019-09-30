import {Component, Input, OnInit} from '@angular/core';
import {Run} from "../typescript-generator/typescript-generator-model";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.less']
})
export class CourseComponent implements OnInit {
  @Input() run: Run;

  constructor() {
  }

  ngOnInit() {
  }

}
