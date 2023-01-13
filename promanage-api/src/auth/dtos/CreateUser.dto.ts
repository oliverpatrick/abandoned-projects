import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(32)
  email: string;

  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(32)
  firstname: string;

  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(32)
  lastname: string;

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(32)
  password: string;
}
