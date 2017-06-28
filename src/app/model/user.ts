import {Role} from "./role.enum";
export class User {
  id: number;
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  name: string;
  telephone: string;
  address: string;
  role: Role;
}
