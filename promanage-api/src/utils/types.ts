import { User } from './typeorm';
import { Request } from 'express';

export type CreateUserDetails = {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
};

export type ValidateUserDetails = {
  email: string;
  password: string;
};

export type FindUserParams = Partial<{
  id: number;
  email: string;
}>;

export type FindUserOptions = Partial<{
  selectAll: boolean;
}>;

export interface AuthenticatedRequest extends Request {
  user: User;
}

export type AccessParams = {
  id: number;
  userId: number;
};

// export type UserProfileFiles = Partial<{
//   avatar: Express.Multer.File[];
// }>;

// // eslint-disable-next-line @typescript-eslint/no-empty-interface
// export interface Attachment extends Express.Multer.File {}

// export type UploadImageParams = {
//   key: string;
//   file: Express.Multer.File;
// };

// export type UpdateUserProfileParams = Partial<{
//   avatar: Express.Multer.File;
// }>;
