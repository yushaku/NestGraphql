/* eslint-disable @typescript-eslint/no-unused-vars */
import { User } from '@/database/entities/user.entity';
import { Resolver, Query, Mutation, Args, Field } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUserInput, DeleteUserInput, UpdateUserInput } from './dto';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation((_returns) => User)
  create(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Mutation((_returns) => User)
  update(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    const id = '9412f520-5eb0-43d0-8ffc-625f5f230c2d';
    return this.usersService.update(id, updateUserInput);
  }

  // @Mutation((_returns) => null)
  // remove(@Args('id') id: DeleteUserInput) {
  //   return this.usersService.remove(id.id);
  // }

  @Query((_returns) => [User])
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Query((_returns) => User)
  findOne(@Args('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }
}
