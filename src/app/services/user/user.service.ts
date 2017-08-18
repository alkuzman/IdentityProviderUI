import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {User} from "../../model/user";
import {HttpUtils} from "../../core/http-utils/http-utils.service";
import "rxjs/add/operator/map";
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {
  private url = '/uaa/users';
  private user: User;
  private notExistsErr: any;
  private notExistsUsername: string;

  constructor(private http: HttpClient, private httpUtils: HttpUtils) {
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  public save(user: User): Observable<User> {
    return this.http.post<User>(this.url, this.user, {}).do((u: User) => {
      this.user = user;
      this.notExistsUsername = null;
      this.notExistsErr = null;
    });
  }

  public findByUsername(username: string): Observable<User> {
    const params: HttpParams = new HttpParams().set("username", username);
    return this.http.get<User>(this.url, {params: params});
  }

  public findByUsernameCached(username: string): Observable<User> {
    if (this.user && this.user.username === username) {
      return Observable.of(this.user);
    } else if (this.notExistsErr && this.notExistsUsername === username) {
      return Observable.throw(this.notExistsErr);
    } else {
      return this.findByUsername(username).do((user: User) => {
        this.user = user;
        this.notExistsErr = null;
        this.notExistsUsername = null;
      }, (e: any) => {
        if (e instanceof HttpErrorResponse && e.status === 404) {
          this.notExistsUsername = username;
          this.notExistsErr = e;
          this.user = null;
        }
      });
    }
  }
}
