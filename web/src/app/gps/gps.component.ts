import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-gps',
  templateUrl: './gps.component.html',
  styleUrls: ['./gps.component.less']
})
export class GpsComponent implements OnInit {

  @Input() lat: number;
  @Input() lon: number;

  constructor() {
  }

  ngOnInit() {
  }

}
