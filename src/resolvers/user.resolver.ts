import { CreateUserInput } from '@generator';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { hashPassword } from '@utils';
import { ApolloError, ForbiddenError } from 'apollo-server-express';
import { User } from 'src/user/user.model';
import { MongoRepository } from 'typeorm';
// import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: MongoRepository<User>,
  ) {}
  @Query(() => String)
  async hello() {
    return 'world';
  }

  @Query(() => [User])
  async users(
    @Args('offset') offset: number,
    @Args('limit') limit: number,
  ): Promise<User[]> {
    const users = await this.userRepository.manager
      .getMongoRepository(User)
      .find({
        take: limit,
        skip: offset,
        cache: true,
      });

    return users;
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
  async createUser(@Args('input') input: CreateUserInput): Promise<User> {
    try {
      const { password, email } = input;

      const createdUser = await this.userRepository.manager
        .getMongoRepository(User)
        .save(
          new User({
            ...input,
            local: {
              email,
              password: await hashPassword(password),
            },
          }),
        );

      return createdUser;
    } catch (error) {
      throw new ApolloError(error);
    }
  }

  // @Mutation(() => Boolean)
  // async updateUser(@Args('_id') _id: string, @Args('input') input: UserInput) {
  //   return await this.userService.update(_id, input);
  // }

  // @Mutation(() => Boolean)
  // async deleteUser(@Args('_id') _id: string) {
  //   return await this.userService.delete(_id);
  // }

  // @Mutation(() => Boolean)
  // async deleteUser(@Args('_id') _id: string) {
  //   return await this.userRepository.delete(_id);
  // }

  // @Mutation(() => Boolean)
  // async deleteAll() {
  //   return await this.userService.deleteAll();
  // }
}
