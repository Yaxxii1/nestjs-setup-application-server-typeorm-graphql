import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { ForbiddenError, ApolloError } from 'apollo-server-express';
import { MongoRepository } from 'typeorm';
import { User, UserInput } from './user.model';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    @InjectRepository(User)
    private readonly userRepository: MongoRepository<User>,
  ) {}

  @Query(() => String)
  async hello() {
    return 'world';
  }

  // @Query(() => [User])
  // async users() {
  //   return this.userService.findAll();
  // }

  @Query(() => [User])
  async users() {
    return this.userRepository.find();
  }

  @Query(() => User)
  async user(@Args('_id') _id: string) {
    try {
      const user = await this.userRepository.manager
        .getMongoRepository(User)
        .findOne({ where: { _id } });
      if (!user) {
        throw new ForbiddenError('User not found');
      }
      return user;
    } catch (error) {
      throw new ApolloError(error);
    }
  }

  @Mutation(() => User)
  async createUser(@Args('input') input: UserInput) {
    try {
      const { password, username } = input;
    } catch (error) {}
  }

  @Mutation(() => Boolean)
  async updateUser(@Args('_id') _id: string, @Args('input') input: UserInput) {
    return await this.userService.update(_id, input);
  }

  // @Mutation(() => Boolean)
  // async deleteUser(@Args('_id') _id: string) {
  //   return await this.userService.delete(_id);
  // }

  @Mutation(() => Boolean)
  async deleteUser(@Args('_id') _id: string) {
    return await this.userRepository.delete(_id);
  }

  @Mutation(() => Boolean)
  async deleteAll() {
    return await this.userService.deleteAll();
  }
}
