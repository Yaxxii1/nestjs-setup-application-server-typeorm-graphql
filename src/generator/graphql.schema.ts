
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class UserInput {
    username: string;
    password: string;
}

export class User {
    _id: string;
    username: string;
    password: string;
}

export abstract class IQuery {
    abstract hello(): string | Promise<string>;

    abstract users(): User[] | Promise<User[]>;

    abstract user(_id: string): User | Promise<User>;
}

export abstract class IMutation {
    abstract createUser(input: UserInput): User | Promise<User>;

    abstract updateUser(_id: string, input: UserInput): User | Promise<User>;

    abstract deleteUser(_id: string): boolean | Promise<boolean>;

    abstract deleteAll(): boolean | Promise<boolean>;
}

type Nullable<T> = T | null;
