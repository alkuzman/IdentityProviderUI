import {Properties} from "../../../../core/helper/properties";
/**
 * Created by AKuzmanoski on 08/07/2017.
 */
export interface RegistrationFieldsErrors extends Properties {
  firstName?: string;
  lastName?: string;
  password?: string;
  confirmPassword?: string;
  gender?: string;
  birthday?: string;
  country?: string;
  telephone?: string;
}
