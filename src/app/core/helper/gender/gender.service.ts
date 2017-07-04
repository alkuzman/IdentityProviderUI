import {Injectable} from "@angular/core";
import {Gender} from "../../../model/gender.enum";

@Injectable()
export class GenderService {
  private _genders: Gender[];
  private _male: Gender = Gender.MALE;
  private _female: Gender = Gender.FEMALE;
  private _other: Gender = Gender.OTHER;
  private _none: Gender = Gender.NONE;

  public get genders(): Gender[] {
    return this._genders;
  }

  public get male(): Gender {
    return this._male;
  }

  public get female(): Gender {
    return this._female;
  }

  public get other(): Gender {
    return this._other;
  }

  public get none(): Gender {
    return this._none;
  }

  constructor() {
    this._genders = [];
    this._genders.push(Gender.MALE);
    this._genders.push(Gender.FEMALE);
    this._genders.push(Gender.OTHER);
    this._genders.push(Gender.NONE);
  }

}
