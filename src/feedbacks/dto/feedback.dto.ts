import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class FeedBackDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsString()
  @IsNotEmpty()
  text: string
}
