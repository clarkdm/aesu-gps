import {Component, OnInit} from '@angular/core';
import {AesuGpsApiService} from "../typescript-generator/aesu-gps-api-service";
import {Gps, Run} from "../typescript-generator/typescript-generator-model";

@Component({
  selector: 'app-run-scorers',
  templateUrl: './run-scorers.component.html',
  styleUrls: ['./run-scorers.component.scss']
})
export class RunScorersComponent implements OnInit {

  runs: Run[];

  constructor(private aesuGpsApiService: AesuGpsApiService) {
  }

  ngOnInit() {
    this.aesuGpsApiService.getAllRun().subscribe(value => {
      this.runs = value;
    })
  }

  getDifference(x: number, y: number): number {
    let d = x - y;
    if (d < 0) {
      return (y - x) * 10
    }
    return d * 10
  }

  getGpsDifference(x: Gps, y: Gps): number {
    return this.getDifference(x.latitude, y.latitude) + this.getDifference(x.longitude, y.longitude)
  }

  getScorer(run: Run): number {
    let scorer = 0;
    run.guessList.map(value => this.getGpsDifference(value.target, value.guess))
      .forEach(value => scorer = scorer + value);
    return scorer;
  }

}
