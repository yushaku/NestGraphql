import { Article } from './article.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from './baseEntity';

@Entity()
@ObjectType()
export class User extends BaseEntity {
  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  email: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  age?: number;

  @Field((type) => [Article])
  article: Article[];
}
