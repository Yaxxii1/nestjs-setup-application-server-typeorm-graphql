
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface UserInput {
    username: string;
    password: string;
}

export interface User {
    _id: string;
    username: string;
    password: string;
}

export interface IQuery {
    hello(): string | Promise<string>;
    users(): User[] | Promise<User[]>;
    user(_id: string): User | Promise<User>;
}

export interface IMutation {
    createUser(input: UserInput): User | Promise<User>;
    updateUser(_id: string, input: UserInput): User | Promise<User>;
    deleteUser(_id: string): boolean | Promise<boolean>;
    deleteAll(): boolean | Promise<boolean>;
}

type Nullable<T> = T | null;
