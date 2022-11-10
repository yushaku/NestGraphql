import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Generated, PrimaryGeneratedColumn } from 'typeorm';
import * as uuid from 'uuid';

@ObjectType()
export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  @Field()
  public id: string = uuid.v4();

  @Field({ name: 'created_at' })
  @Column()
  createdAt: Date = new Date();

  @Field({ name: 'updated_at' })
  @Column()
  updatedAt: Date = new Date();
}
