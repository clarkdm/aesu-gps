import {Component, OnInit} from '@angular/core';
import {AppService} from "../app.service";

@Component({
  selector: 'app-nav-bar',
  template: `
    <span  style="width: 100%;">
      <button mat-icon-button [matMenuTriggerFor]="menu" aria-label="Example icon-button with a menu">
          <mat-icon>more_vert</mat-icon>
      </button>
      

      <mat-menu #menu="matMenu">
          <button mat-menu-item routerLink="/home">
              <mat-icon>home</mat-icon>
              <span>Home</span>
          </button>
          <button mat-menu-item routerLink="/admin">
              <mat-icon>security</mat-icon>
              <span>Admin</span>
          </button>
          <button mat-menu-item routerLink="/login" *ngIf="app.authenticated">
              <mat-icon>account_circle</mat-icon>
              <span>login</span>
          </button>
          <h4 mat-menu-item>{{app.user}}</h4>
      </mat-menu>
        </span>
  `
})
export class NavBarComponent implements OnInit {

  constructor(private app: AppService) {
  }

  ngOnInit() {
    this.app.isLogdIn();
  }

}
