import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { hashPassword } from '../../utils/helpers';
import { User } from '../../utils/typeorm';
import {
  CreateUserDetails,
  FindUserOptions,
  FindUserParams,
} from '../../utils/types';
import { IUserService } from '../interfaces/user';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async createUser(userDetails: CreateUserDetails) {
    const existingUser = await this.userRepository.findOne({
      where: {
        email: userDetails.email,
      },
    });
    if (existingUser)
      throw new HttpException('User already exists', HttpStatus.CONFLICT);
    const password = await hashPassword(userDetails.password);
    const params = { ...userDetails, password };
    const newUser = this.userRepository.create(params);
    return this.userRepository.save(newUser);
  }

  async findUser(
    params: FindUserParams,
    options?: FindUserOptions,
  ): Promise<User> {
    const selections: (keyof User)[] = ['email', 'firstname', 'lastname', 'id'];
    const selectionsWithPassword: (keyof User)[] = [...selections, 'password'];
    return this.userRepository.findOne({
      where: {
        id: params.id,
        email: params.email,
      },
      select: options?.selectAll ? selectionsWithPassword : selections,
    });
  }

  async saveUser(user: User) {
    return this.userRepository.save(user);
  }
}
