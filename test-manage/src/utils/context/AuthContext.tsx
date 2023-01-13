import { createContext } from 'react';
import { IUser } from '../interfaces/IUser';

type AuthContextType = {
  user?: IUser;
  updateAuthUser: (data: IUser) => void;
};

export const AuthContext = createContext<AuthContextType>({
  updateAuthUser: () => {}
});
