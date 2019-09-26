import {Component, Input, OnInit} from '@angular/core';
import {Gps} from "../typescript-generator/typescript-generator-model";

@Component({
  selector: 'app-gps',
  templateUrl: './gps.component.html',
  styleUrls: ['./gps.component.less']
})
export class GpsComponent implements OnInit {

  @Input() gps: Gps;

  constructor() {
  }

  ngOnInit() {
  }

}
