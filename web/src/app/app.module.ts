import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgModule} from "@angular/core";
import {AesuGpsApiService} from "./core/typescript-generator/aesu-gps-api-service";
import {AesuGpsTypescriptGeneratorHttrAdapter} from "./core/typescript-generator/aesu-gps-typescript-generator-adapter";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    AesuGpsApiService, AesuGpsTypescriptGeneratorHttrAdapter
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

}
