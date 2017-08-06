import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {User} from "../../model/user";
import {HttpUtils} from "../../core/http-utils/http-utils.service";
import "rxjs/add/operator/map";
import {Properties} from "../../core/helper/properties";
import {PropertiesToUrlSearchParams} from "../../core/helper/properties-to-url-search-params";

@Injectable()
export class UserService {
  private url = '/uaa/users';

  constructor(private http: HttpClient, private httpUtils: HttpUtils) {
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  public findByUsername(username: string): Observable<User> {
    const params: HttpParams = new HttpParams().set("username", username);
    return this.http.get<User>(this.url, {params: params});
  }
}
