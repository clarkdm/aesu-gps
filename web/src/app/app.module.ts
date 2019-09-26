import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgModule} from "@angular/core";
import {AesuGpsApiService} from "./typescript-generator/aesu-gps-api-service";
import {AesuGpsTypescriptGeneratorHttrAdapter} from "./typescript-generator/aesu-gps-typescript-generator-adapter";
import {BrowserModule} from "@angular/platform-browser";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {AppService} from "./app.service";
import {XhrInterceptor} from "./xhrInterceptor";
import {GpsComponent} from './gps/gps.component';
import {CourseComponent} from './course/course.component';
import {TeamComponent} from './team/team.component';
import {RunComponent} from './run/run.component';
import {AdminComponent} from './admin/admin.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModuleModule} from "./material-module/material-module.module";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {GetGpsComponent} from './get-gps/get-gps.component';
import {EditCourseComponent} from './admin/edit-course/edit-course.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    GpsComponent,
    CourseComponent,
    TeamComponent,
    RunComponent,
    AdminComponent,
    NavBarComponent,
    GetGpsComponent,
    EditCourseComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    ReactiveFormsModule,
  ],
  providers: [
    AesuGpsApiService,
    AesuGpsTypescriptGeneratorHttrAdapter,
    AppService,
    {provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true}
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

}

