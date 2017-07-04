import {Role} from "./role.enum";
import {Gender} from "./gender.enum";
import {Country} from "./country";
export class User {
  id: number;
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  name: string;
  telephone: string;
  country: Country;
  role: Role;
  profileImage: string;
  gender: Gender;
  birthday: Date;
}
