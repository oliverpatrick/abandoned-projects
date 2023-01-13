import { Profile } from './IProfile';

export interface IUser {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  profile?: Profile;
}
