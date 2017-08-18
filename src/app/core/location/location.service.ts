import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HttpUtils} from "../http-utils/http-utils.service";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {HttpClient, HttpErrorResponse, HttpEventType, HttpRequest, HttpResponse} from "@angular/common/http";
import {Country} from "./country";
import 'rxjs/add/operator/retry';

@Injectable()
export class LocationService {
  public countries: BehaviorSubject<Country[]> = new BehaviorSubject(undefined);
  public location: BehaviorSubject<Country> = new BehaviorSubject(undefined);


  private getCurrentIpLocation(): Observable<any> {
    return this.http.get<any>('http://ipinfo.io').retry(3);
  }

  private getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>("https://restcountries.eu/rest/v2/all").retry(3);
  }

  constructor(private http: HttpClient, private httpUtils: HttpUtils) {
    this.getCountries().subscribe((cont: Country[]) => {
      this.countries.next(cont);
      this.getCurrentIpLocation().subscribe((loc: any) => {
        for (const country of cont) {
          if (country.alpha2Code === loc.country) {
            this.location.next(country);
          }
        }
      });
    }, (error: HttpErrorResponse) => {
      if (error.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        console.log('An error occurred:', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
        console.log(error);
      }
    });
  }

  public getCountryName(country: any): string {
    if (country == null) {
      return "";
    }
    if (country.alpha2Code === "MK") {
      return "Macedonia"
    } else {
      return country.name;
    }
  }
}
