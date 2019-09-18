import {Component} from "@angular/core";
import {AesuGpsApiService} from "./core/typescript-generator/aesu-gps-api-service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'web';


  constructor(private aesuGpsApiService: AesuGpsApiService) {
  }

  private test() {
    this.aesuGpsApiService.getGisById("3").subscribe(value => {
      console.log(value);
    })
  }
}
