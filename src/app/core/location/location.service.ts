import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Http, Response} from "@angular/http";
import {HttpUtils} from "../http-utils/http-utils.service";
import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class LocationService {
  private dataLoaded = false;
  public countries: BehaviorSubject<any[]> = new BehaviorSubject(undefined);
  public location: BehaviorSubject<any> = new BehaviorSubject(undefined);

  private getCurrentIpLocation(): Observable<any> {
    return this.http.get('http://ipinfo.io')
      .map(response => HttpUtils.extractData(response));
  }

  private getCountries(): Observable<any> {
    return this.http.get("https://restcountries.eu/rest/v2/all").map((response: Response) => HttpUtils.extractData(response));
  }

  constructor(private http: Http, private httpUtils: HttpUtils) {
    console.log("constructor");
    this.getCountries().subscribe((cont: any[]) => {
      this.countries.next(cont);
      this.getCurrentIpLocation().subscribe((loc: any) => {
        for (const country of cont) {
          if (country.alpha2Code === loc.country) {
            this.location.next(country);
          }
        }
      });
    });
  }

  public getCountryName(country: any): string {
    if (country.alpha2Code === "MK") {
      return "Macedonia"
    } else {
      return country.name;
    }
  }
}
