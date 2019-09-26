import {Component, EventEmitter, Output} from '@angular/core';
import {Gps} from "../typescript-generator/typescript-generator-model";

@Component({
  selector: 'app-get-gps',
  templateUrl: './get-gps.component.html',
  styleUrls: ['./get-gps.component.less']
})
export class GetGpsComponent {
  gps = new Gps();
  @Output() newGps = new EventEmitter<Gps>();


  saveGps = () => {
    this.newGps.emit(this.gps);
  };
  getGps = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.displayLocationInfo);
    }
  };

  displayLocationInfo = position => {
    this.gps.longitude = position.coords.longitude;
    this.gps.latitude = position.coords.latitude;
    console.log(position.coords)
  };

}
