import {Component, OnInit} from '@angular/core';
import {AesuGpsApiService} from "../typescript-generator/aesu-gps-api-service";
import {Course, Run, Team} from "../typescript-generator/typescript-generator-model";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {

  courses: Course[];
  teams: Team[];
  runs: Run[];
  coursesToEdit: Course;

  admin = false;
  courseForm: FormGroup;
  courseEditForm: FormGroup;
  teamForm: FormGroup;
  runForm: FormGroup;

  constructor(private aesuGpsApiService: AesuGpsApiService,
              private formBuilder: FormBuilder) {

    this.courseForm = this.formBuilder.group({
      name: ''
    });
    this.teamForm = this.formBuilder.group({
      name: '',
      role: ''
    });
    this.runForm = new FormGroup({
      runCourse: new FormControl(),
      runTeam: new FormControl()
    });

    this.courseEditForm = new FormGroup({
      editCourse: new FormControl(),
    });

  }

  ngOnInit(): void {
    this.aesuGpsApiService.user().subscribe(value => {
      console.log(value.authorities[0].authority);
      if (value.authorities[0].authority == "ROLE_admin") {
        this.admin = true;
      }
    });
    this.getAllCourse();
    this.getAllTeam();
    this.getAllRun();
  }

  newCourse = () => {
    let course = new Course();
    course.name = this.courseForm.getRawValue().name;
    this.aesuGpsApiService.saveCourse(course).subscribe(value => {
      this.getAllCourse();
    })
  };
  deleteCourseById = (id: number) => {
    this.aesuGpsApiService.deleteById$POST$api_course_id(id.toString()).subscribe(value => {
      this.getAllCourse();
    })
  };
  getAllCourse = () => {
    this.aesuGpsApiService.getAllCourse().subscribe(value => {
      this.courses = value;
    })
  };

  newTeam = () => {
    let team = new Team();
    team.name = this.teamForm.getRawValue().name;
    team.role = this.teamForm.getRawValue().role;
    console.log(this.teamForm.getRawValue());
    this.aesuGpsApiService.saveTeam(team).subscribe(value => {
      this.getAllTeam();
    })
  };
  deleteTeamById = (id: number) => {
    this.aesuGpsApiService.deleteById$POST$api_team_id(id.toString()).subscribe(value => {
      this.getAllTeam();
    })
  };
  getAllTeam = () => {
    this.aesuGpsApiService.getAllTeam().subscribe(value => {
      this.teams = value;
    })
  };

  newRun = () => {
    let run = new Run();
    // console.log(this.runForm.getRawValue());
    run.id = null;
    run.guessList = [];
    run.team = this.runForm.getRawValue().runTeam;
    run.course = this.runForm.getRawValue().runCourse;
    this.aesuGpsApiService.saveRun(run).subscribe(value => {
      this.getAllRun();
    })
  };

  deleteRunById = (id: number) => {
    this.aesuGpsApiService.deleteById$POST$api_run_id(id.toString()).subscribe(value => {
      this.getAllRun();
    })
  };
  getAllRun = () => {
    this.aesuGpsApiService.getAllRun().subscribe(value => {
      this.runs = value;
    })
  };

  editCourse = () => {
    console.log(this.courseEditForm.getRawValue());
    this.coursesToEdit = this.courseEditForm.getRawValue().editCourse;
  };

}
