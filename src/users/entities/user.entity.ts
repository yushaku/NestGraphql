import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field((type) => String)
  name: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  age?: number;
}
