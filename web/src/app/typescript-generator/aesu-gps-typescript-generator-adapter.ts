import {HttpClient} from "@angular/common/http";
import {TypescriptGeneratorHttpAdapter} from "./typescript-generator-adapter";
import {Injectable} from "@angular/core";

@Injectable()
export class AesuGpsTypescriptGeneratorHttrAdapter extends TypescriptGeneratorHttpAdapter {
  constructor(httpClient: HttpClient) {
    super(httpClient, "")
  }
}
