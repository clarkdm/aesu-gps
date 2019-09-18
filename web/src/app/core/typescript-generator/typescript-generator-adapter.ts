import * as models from "./typescript-generator-model";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs-compat/Observable";
import "rxjs-compat/add/operator/map";


export abstract class TypescriptGeneratorHttpAdapter implements models.HttpClient {
  private readonly url: string;

  protected constructor(private httpClient: HttpClient, url: string) {
    this.url = url;
  }

  request<R>(requestConfig: { method: string; url: string; queryParams?: any; data?: any; copyFn?: (data: R) => R }): Observable<R> {

    const params = {params: new HttpParams({fromObject: requestConfig.queryParams})};
    const formattedUrl = this.url + requestConfig.url;
    let obs: Observable<R>;
    if (requestConfig.method === "GET") {
      obs = this.httpClient.get<R>(formattedUrl, params)
    } else if (requestConfig.method === "POST") {
      obs = this.httpClient.post<R>(formattedUrl, requestConfig.data, params)
    } else if (requestConfig.method === "PUT") {
      obs = this.httpClient.put<R>(formattedUrl, requestConfig.data, params)
    } else if (requestConfig.method === "PATCH") {
      obs = this.httpClient.patch<R>(formattedUrl, requestConfig.data, params)
    } else if (requestConfig.method === "DELETE") {
      obs = this.httpClient.delete<R>(formattedUrl, params)
    } else {
      throw new Error("unsupported by TypescriptGeneratorHttrAdapter")
    }

    return obs.map(value => (requestConfig.copyFn ? requestConfig.copyFn(value) : value));
  }
}
