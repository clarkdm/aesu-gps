/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 2.16.538 on 2019-09-17 23:32:09.

import {Observable} from "rxjs";

export class Course {
  id: number;
  targets: Gps[];
  name: string;
}

export class Gps {
  id: number;
  latitude: number;
  longitude: number;
}

export class Guess {
  id: number;
  guess: Gps;
  target: Gps;
  timeStamp: Date;
}

export class Run {
  id: number;
  course: Course;
  team: Team;
  guessSet: Guess[];
}

export class Team {
  id: number;
  runs: Run[];
  name: string;
}

export interface CourseRepository extends CrudRepository<Course, number> {
}

export interface GpsRepository extends CrudRepository<Gps, number> {
}

export interface GuessRepository extends CrudRepository<Guess, number> {
}

export interface RunRepository extends CrudRepository<Run, number> {
}

export interface TeamRepository extends CrudRepository<Team, number> {
}

export interface CrudRepository<T, ID> extends Repository<T, ID> {
}

export interface Repository<T, ID> {
}

export interface RestApplication {

  /**
   * HTTP GET /test/{id}
   * Java method: com.clarkdm.aesu.gps.controller.GpsController.getGisById
   */
  getGisById(id: string): RestResponse<Gps>;
}

export interface HttpClient {

  request<R>(requestConfig: { method: string; url: string; queryParams?: any; data?: any; copyFn?: (data: R) => R; }): RestResponse<R>;
}

export class RestApplicationClient implements RestApplication {

  constructor(protected httpClient: HttpClient) {
  }

  /**
   * HTTP GET /test/{id}
   * Java method: com.clarkdm.aesu.gps.controller.GpsController.getGisById
   */
  getGisById(id: string): RestResponse<Gps> {
    return this.httpClient.request({method: "GET", url: uriEncoding`test/${id}`});
  }
}

export type RestResponse<R> = Observable<R>;

function uriEncoding(template: TemplateStringsArray, ...substitutions: any[]): string {
  let result = "";
  for (let i = 0; i < substitutions.length; i++) {
    result += template[i];
    result += encodeURIComponent(substitutions[i]);
  }
  result += template[template.length - 1];
  return result;
}
