import {Component, Input, OnInit} from '@angular/core';
import {Gps, Guess} from "../typescript-generator/typescript-generator-model";
import {AesuGpsApiService} from "../typescript-generator/aesu-gps-api-service";

@Component({
  selector: 'app-guess',
  templateUrl: './guess.component.html',
  styleUrls: ['./guess.component.scss']
})
export class GuessComponent implements OnInit {
  @Input() guess: Guess;
  @Input() index: number;

  constructor(private aesuGpsApiService: AesuGpsApiService) {
  }

  ngOnInit() {
  }

  getGuess = ($event: Gps) => {
    this.guess.guess = $event;
    this.aesuGpsApiService.saveGuess(this.guess).subscribe(value => this.guess = value)
  };
}
