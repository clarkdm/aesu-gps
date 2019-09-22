import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgModule} from "@angular/core";
import {AesuGpsApiService} from "./core/typescript-generator/aesu-gps-api-service";
import {AesuGpsTypescriptGeneratorHttrAdapter} from "./core/typescript-generator/aesu-gps-typescript-generator-adapter";
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    GpsComponent,
    CourseComponent,
    TeamComponent,
    RunComponent,
    AdminComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
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

