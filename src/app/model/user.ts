import {Role} from "./role.enum";
import {Gender} from "./gender.enum";
export class User {
  id: number;
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  name: string;
  telephone: string;
  country: string;
  role: Role;
  profileImage: string;
  gender: Gender;
  birthday: Date;
}
