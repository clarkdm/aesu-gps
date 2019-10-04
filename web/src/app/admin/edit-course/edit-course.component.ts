import {Component, Input, OnInit} from '@angular/core';
import {Course, Gps} from "../../typescript-generator/typescript-generator-model";
import {AesuGpsApiService} from "../../typescript-generator/aesu-gps-api-service";

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.less']
})
export class EditCourseComponent implements OnInit {

  @Input() course: Course;

  constructor(private aesuGpsApiService: AesuGpsApiService) {
  }

  ngOnInit() {
  }

  getGps = ($event: Gps) => {
    this.course.targets.push($event);
  };
  removeGps = (index: number) => {
    this.course.targets.splice(index, 1)
  };
  saveCourse = () => {
    this.aesuGpsApiService.saveCourse(this.course).subscribe(value => value);

  };
}
