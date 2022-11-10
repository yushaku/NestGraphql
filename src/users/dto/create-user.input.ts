import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsString()
  name: string;

  @Field()
  @IsEmail()
  email: string;

  @Field({ nullable: true })
  @IsNumber()
  @IsOptional()
  age: number;
}

@InputType()
export class DeleteUserInput {
  @Field()
  @IsString()
  id: string;
}
