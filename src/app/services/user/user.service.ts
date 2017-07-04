import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {User} from "../../model/user";
import {HttpUtils} from "../../core/http-utils/http-utils.service";
import "rxjs/add/operator/map";
import {Properties} from "../../core/helper/properties";
import {PropertiesToUrlSearchParams} from "../../core/helper/properties-to-url-search-params";

@Injectable()
export class UserService {
  private url = '/uaa/users';

  constructor(private http: Http, private httpUtils: HttpUtils) {
  }

  public findAll(): Observable<User[]> {
    return this.http.get(this.url).map((response: Response) => HttpUtils.extractData(response));
  }

  public findByUsername(username: string): Observable<User> {
    const properties: Properties = <Properties>{username: username};
    const params = PropertiesToUrlSearchParams.transform(properties);
    return this.http.get(this.url, {search: params}).map((response: Response) => HttpUtils.extractData(response));
  }
}
