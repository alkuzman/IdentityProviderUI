/**
 * Created by AKuzmanoski on 06/08/2017.
 */
import {Currency} from "./currency";
import {Language} from "./language";
import {Translation} from "./translation";
import {RegionalBlock} from "./regionalBlock";

export interface Country {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  region: string;
  subregion: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  gini: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  currencies: Currency[];
  languages: Language[];
  translations: Translation;
  flag: string;
  regionalBlocs: RegionalBlock[];
}
