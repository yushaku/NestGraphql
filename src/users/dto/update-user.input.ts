// import { CreateUserInput } from './create-user.input';
// import { PartialType } from '@nestjs/mapped-types';

// export class UpdateUserInput extends PartialType(CreateUserInput) {}
import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateUserInput {
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
