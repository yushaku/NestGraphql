import { User } from 'src/database/entities';
import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './baseEntity';

@Entity()
@ObjectType()
export class Article extends BaseEntity {
  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column()
  content: string;

  @Field()
  @Column()
  userId: string;

  @ManyToOne(() => User, (user) => user.article)
  @Field((type) => User)
  owner: User;
}
