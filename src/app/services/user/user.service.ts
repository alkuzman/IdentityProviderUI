import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../../model/user';
import {HttpUtils} from '../../core/http-utils/http-utils.service';
import 'rxjs/add/operator/map'

@Injectable()
export class UserService {
  private url = '/auth/users';

  constructor(private http: Http, private httpUtils: HttpUtils) { }

  public findAll(): Observable<User[]> {
    return this.http.get(this.url).map((response: Response) => HttpUtils.extractData(response));
  }
}
