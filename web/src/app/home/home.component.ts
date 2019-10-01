import {Component, OnInit} from '@angular/core';
import {AesuGpsApiService} from "../typescript-generator/aesu-gps-api-service";
import {FormControl, FormGroup} from "@angular/forms";
import {Run} from "../typescript-generator/typescript-generator-model";

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  user;
  runs: Run[];
  run: Run;
  title = 'Demo';
  selectRun: FormGroup;

  constructor(private aesuGpsApiService: AesuGpsApiService) {
    this.selectRun = new FormGroup({
      run: new FormControl()
    });

  }

  ngOnInit(): void {
    this.aesuGpsApiService.user().subscribe(value => {
      this.user = value;
      this.getRuns(this.user.authorities[0].authority);
    });
  }

  getRuns(role: string): void {
    this.aesuGpsApiService.getAllByTeamRole(role).subscribe(value => {
      this.runs = value;
    });
  }

  startRun(): void {
    this.run = this.selectRun.getRawValue().run
  }



}


