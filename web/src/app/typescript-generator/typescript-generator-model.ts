/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 2.16.538 on 2019-10-01 00:12:47.

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
  guessList: Guess[];
}

export class Team {
  id: number;
  runs: Run[];
  name: string;
  role: string;
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

export interface Principal {
  name: string;
}

export interface CrudRepository<T, ID> extends Repository<T, ID> {
}

export interface Repository<T, ID> {
}

export interface RestApplication {

  /**
   * HTTP GET /api/course
   * Java method: com.clarkdm.aesu.gps.controller.CourseController.getAllCourse
   */
  getAllCourse(): RestResponse<Course[]>;

  /**
   * HTTP POST /api/course
   * Java method: com.clarkdm.aesu.gps.controller.CourseController.saveCourse
   */
  saveCourse(course: Course): RestResponse<Course>;

  /**
   * HTTP POST /api/course/{id}
   * Java method: com.clarkdm.aesu.gps.controller.CourseController.deleteById
   */
  deleteById$POST$api_course_id(id: string): RestResponse<void>;

  /**
   * HTTP GET /api/course/{id}
   * Java method: com.clarkdm.aesu.gps.controller.CourseController.getCourseById
   */
  getCourseById(id: string): RestResponse<Course>;

  /**
   * HTTP GET /api/gps/{id}
   * Java method: com.clarkdm.aesu.gps.controller.GpsController.getGisById
   */
  getGisById(id: string): RestResponse<Gps>;

  /**
   * HTTP GET /api/guess
   * Java method: com.clarkdm.aesu.gps.controller.GuessController.getAllGuess
   */
  getAllGuess(): RestResponse<Guess[]>;

  /**
   * HTTP POST /api/guess
   * Java method: com.clarkdm.aesu.gps.controller.GuessController.saveGuess
   */
  saveGuess(guess: Guess): RestResponse<Guess>;

  /**
   * HTTP POST /api/guess/{id}
   * Java method: com.clarkdm.aesu.gps.controller.GuessController.deleteById
   */
  deleteById$POST$api_guess_id(id: string): RestResponse<void>;

  /**
   * HTTP GET /api/guess/{id}
   * Java method: com.clarkdm.aesu.gps.controller.GuessController.getGuessById
   */
  getGuessById(id: string): RestResponse<Guess>;

  /**
   * HTTP GET /api/run
   * Java method: com.clarkdm.aesu.gps.controller.RunController.getAllRun
   */
  getAllRun$GET$api_run(): RestResponse<Run[]>;

  /**
   * HTTP GET /api/run/role/{role}
   * Java method: com.clarkdm.aesu.gps.controller.RunController.getAllRun
   */
  getAllRun$GET$api_run_role_role(role: string): RestResponse<Run[]>;

  /**
   * HTTP POST /api/run/save
   * Java method: com.clarkdm.aesu.gps.controller.RunController.saveRun
   */
  saveRun(run: Run): RestResponse<Run>;

  /**
   * HTTP POST /api/run/{id}
   * Java method: com.clarkdm.aesu.gps.controller.RunController.deleteById
   */
  deleteById$POST$api_run_id(id: string): RestResponse<void>;

  /**
   * HTTP GET /api/run/{id}
   * Java method: com.clarkdm.aesu.gps.controller.RunController.getRunById
   */
  getRunById(id: string): RestResponse<Run>;

  /**
   * HTTP GET /api/team
   * Java method: com.clarkdm.aesu.gps.controller.TeamController.getAllTeam
   */
  getAllTeam(): RestResponse<Team[]>;

  /**
   * HTTP POST /api/team
   * Java method: com.clarkdm.aesu.gps.controller.TeamController.saveTeam
   */
  saveTeam(team: Team): RestResponse<Team>;

  /**
   * HTTP GET /api/team/role/{role}
   * Java method: com.clarkdm.aesu.gps.controller.TeamController.findByRole
   */
  findByRole(role: string): RestResponse<Team>;

  /**
   * HTTP POST /api/team/{id}
   * Java method: com.clarkdm.aesu.gps.controller.TeamController.deleteById
   */
  deleteById$POST$api_team_id(id: string): RestResponse<void>;

  /**
   * HTTP GET /api/team/{id}
   * Java method: com.clarkdm.aesu.gps.controller.TeamController.getTeamById
   */
  getTeamById(id: string): RestResponse<Team>;

  /**
   * HTTP GET /api/user
   * Java method: com.clarkdm.aesu.gps.controller.UserController.user
   */
  user(): RestResponse<Principal>;
}

export interface HttpClient {

  request<R>(requestConfig: { method: string; url: string; queryParams?: any; data?: any; copyFn?: (data: R) => R; }): RestResponse<R>;
}

export class RestApplicationClient implements RestApplication {

  constructor(protected httpClient: HttpClient) {
  }

  /**
   * HTTP GET /api/course
   * Java method: com.clarkdm.aesu.gps.controller.CourseController.getAllCourse
   */
  getAllCourse(): RestResponse<Course[]> {
    return this.httpClient.request({method: "GET", url: uriEncoding`api/course`});
  }

  /**
   * HTTP POST /api/course
   * Java method: com.clarkdm.aesu.gps.controller.CourseController.saveCourse
   */
  saveCourse(course: Course): RestResponse<Course> {
    return this.httpClient.request({method: "POST", url: uriEncoding`api/course`, data: course});
  }

  /**
   * HTTP POST /api/course/{id}
   * Java method: com.clarkdm.aesu.gps.controller.CourseController.deleteById
   */
  deleteById$POST$api_course_id(id: string): RestResponse<void> {
    return this.httpClient.request({method: "POST", url: uriEncoding`api/course/${id}`});
  }

  /**
   * HTTP GET /api/course/{id}
   * Java method: com.clarkdm.aesu.gps.controller.CourseController.getCourseById
   */
  getCourseById(id: string): RestResponse<Course> {
    return this.httpClient.request({method: "GET", url: uriEncoding`api/course/${id}`});
  }

  /**
   * HTTP GET /api/gps/{id}
   * Java method: com.clarkdm.aesu.gps.controller.GpsController.getGisById
   */
  getGisById(id: string): RestResponse<Gps> {
    return this.httpClient.request({method: "GET", url: uriEncoding`api/gps/${id}`});
  }

  /**
   * HTTP GET /api/guess
   * Java method: com.clarkdm.aesu.gps.controller.GuessController.getAllGuess
   */
  getAllGuess(): RestResponse<Guess[]> {
    return this.httpClient.request({method: "GET", url: uriEncoding`api/guess`});
  }

  /**
   * HTTP POST /api/guess
   * Java method: com.clarkdm.aesu.gps.controller.GuessController.saveGuess
   */
  saveGuess(guess: Guess): RestResponse<Guess> {
    return this.httpClient.request({method: "POST", url: uriEncoding`api/guess`, data: guess});
  }

  /**
   * HTTP POST /api/guess/{id}
   * Java method: com.clarkdm.aesu.gps.controller.GuessController.deleteById
   */
  deleteById$POST$api_guess_id(id: string): RestResponse<void> {
    return this.httpClient.request({method: "POST", url: uriEncoding`api/guess/${id}`});
  }

  /**
   * HTTP GET /api/guess/{id}
   * Java method: com.clarkdm.aesu.gps.controller.GuessController.getGuessById
   */
  getGuessById(id: string): RestResponse<Guess> {
    return this.httpClient.request({method: "GET", url: uriEncoding`api/guess/${id}`});
  }

  /**
   * HTTP GET /api/run
   * Java method: com.clarkdm.aesu.gps.controller.RunController.getAllRun
   */
  getAllRun$GET$api_run(): RestResponse<Run[]> {
    return this.httpClient.request({method: "GET", url: uriEncoding`api/run`});
  }

  /**
   * HTTP GET /api/run/role/{role}
   * Java method: com.clarkdm.aesu.gps.controller.RunController.getAllRun
   */
  getAllRun$GET$api_run_role_role(role: string): RestResponse<Run[]> {
    return this.httpClient.request({method: "GET", url: uriEncoding`api/run/role/${role}`});
  }

  /**
   * HTTP POST /api/run/save
   * Java method: com.clarkdm.aesu.gps.controller.RunController.saveRun
   */
  saveRun(run: Run): RestResponse<Run> {
    return this.httpClient.request({method: "POST", url: uriEncoding`api/run/save`, data: run});
  }

  /**
   * HTTP POST /api/run/{id}
   * Java method: com.clarkdm.aesu.gps.controller.RunController.deleteById
   */
  deleteById$POST$api_run_id(id: string): RestResponse<void> {
    return this.httpClient.request({method: "POST", url: uriEncoding`api/run/${id}`});
  }

  /**
   * HTTP GET /api/run/{id}
   * Java method: com.clarkdm.aesu.gps.controller.RunController.getRunById
   */
  getRunById(id: string): RestResponse<Run> {
    return this.httpClient.request({method: "GET", url: uriEncoding`api/run/${id}`});
  }

  /**
   * HTTP GET /api/team
   * Java method: com.clarkdm.aesu.gps.controller.TeamController.getAllTeam
   */
  getAllTeam(): RestResponse<Team[]> {
    return this.httpClient.request({method: "GET", url: uriEncoding`api/team`});
  }

  /**
   * HTTP POST /api/team
   * Java method: com.clarkdm.aesu.gps.controller.TeamController.saveTeam
   */
  saveTeam(team: Team): RestResponse<Team> {
    return this.httpClient.request({method: "POST", url: uriEncoding`api/team`, data: team});
  }

  /**
   * HTTP GET /api/team/role/{role}
   * Java method: com.clarkdm.aesu.gps.controller.TeamController.findByRole
   */
  findByRole(role: string): RestResponse<Team> {
    return this.httpClient.request({method: "GET", url: uriEncoding`api/team/role/${role}`});
  }

  /**
   * HTTP POST /api/team/{id}
   * Java method: com.clarkdm.aesu.gps.controller.TeamController.deleteById
   */
  deleteById$POST$api_team_id(id: string): RestResponse<void> {
    return this.httpClient.request({method: "POST", url: uriEncoding`api/team/${id}`});
  }

  /**
   * HTTP GET /api/team/{id}
   * Java method: com.clarkdm.aesu.gps.controller.TeamController.getTeamById
   */
  getTeamById(id: string): RestResponse<Team> {
    return this.httpClient.request({method: "GET", url: uriEncoding`api/team/${id}`});
  }

  /**
   * HTTP GET /api/user
   * Java method: com.clarkdm.aesu.gps.controller.UserController.user
   */
  user(): RestResponse<Principal> {
    return this.httpClient.request({method: "GET", url: uriEncoding`api/user`});
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
