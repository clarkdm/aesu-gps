import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RestApplicationClient} from "./typescript-generator-model";
import {AesuGpsTypescriptGeneratorHttrAdapter} from "./aesu-gps-typescript-generator-adapter";

@Injectable()
export class AesuGpsApiService extends RestApplicationClient {
  constructor(@Inject(AesuGpsTypescriptGeneratorHttrAdapter) protected httpClient: HttpClient) {
    super(httpClient);
  }
}
