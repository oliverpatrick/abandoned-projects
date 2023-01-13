import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Query,
} from '@nestjs/common';
import { Routes, Services } from '../../utils/constants';
import { UserAlreadyExists } from '../exceptions/UserAlreadyExists';
import { IUserService } from '../interfaces/user';

@Controller(Routes.USERS)
export class UsersController {
  constructor(
    @Inject(Services.USERS) private readonly userService: IUserService,
  ) {}

  @Get('check')
  async checkEmail(@Query('email') email: string) {
    if (!email)
      throw new HttpException('Invalid Query', HttpStatus.BAD_REQUEST);
    const user = await this.userService.findUser({ email });
    if (user) throw new UserAlreadyExists();
    return HttpStatus.OK;
  }
}
