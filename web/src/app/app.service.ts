import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from "./aesu-gps-model";

@Injectable()
export class AppService implements OnInit {

  authenticated = false;
  user = "Null";

  constructor(private http: HttpClient) {
  }

  ngOnInit() {

  }

  isLogdIn() {
    this.http.get<User>('api/user').subscribe(response => {
      console.log("response['authenticated']");
      console.log(response.name);
      if (response.authenticated) {
        this.authenticated = response.authenticated;
        this.user = response.name;
      } else {
        this.authenticated = false;
      }
    });
  }

  authenticate(credentials, callback) {

    const headers = new HttpHeaders(credentials ? {
      authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.http.get('api/user', {headers: headers}).subscribe(response => {
      if (response['name']) {
        this.authenticated = true;
      } else {
        this.authenticated = false;
      }
      return callback && callback();
    });

  }

}

