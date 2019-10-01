import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Gps} from "../typescript-generator/typescript-generator-model";

@Component({
  selector: 'app-get-gps',
  templateUrl: './get-gps.component.html',
  styleUrls: ['./get-gps.component.less']
})
export class GetGpsComponent implements OnInit {
  gps = new Gps();
  accuracy: number;

  @Output() newGps = new EventEmitter<Gps>();

  ngOnInit() {
    this.getGps()

  }

  saveGps = () => {
    this.newGps.emit(this.gps);
  };
  getGps = () => {
    if (navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          this.gps.longitude = position.coords.longitude;
          this.gps.latitude = position.coords.latitude;
          this.accuracy = position.coords.accuracy;
          console.log(position.coords)
        },
        error => {
          switch (error.code) {
            case 1:
              console.log('Permission Denied');
              break;
            case 2:
              console.log('Position Unavailable');
              break;
            case 3:
              console.log('Timeout');
              break;
          }
        });
    }
  }

}
