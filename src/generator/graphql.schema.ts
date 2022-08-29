
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum Gender {
    UNKNOWN = "UNKNOWN",
    MALE = "MALE",
    FEMALE = "FEMALE"
}

export enum UserType {
    BASIC = "BASIC",
    PREMIUM = "PREMIUM"
}

export class UserInput {
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
    gender?: Nullable<Gender>;
}

export class FileInput {
    filename?: Nullable<string>;
}

export class RecordInput {
    User?: Nullable<UserInput>;
    File?: Nullable<FileInput>;
}

export class CreateUserInput {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    gender: Gender;
}

export class UpdateUserInput {
    firstName: string;
    lastName: string;
    password: string;
    gender: Gender;
}

export class LoginUserInput {
    email: string;
    password: string;
}

export class SearchInput {
    select?: Nullable<string[]>;
    where?: Nullable<RecordInput>;
    start?: Nullable<number>;
    end?: Nullable<number>;
    order?: Nullable<JSONObject>;
    skip?: Nullable<number>;
    take?: Nullable<number>;
}

export class Users {
    users?: Nullable<User[]>;
}

export class LoginResponse {
    accessToken: string;
    refreshToken: string;
}

export class RefreshTokenResponse {
    accessToken: string;
}

export class Local {
    email?: Nullable<string>;
    password?: Nullable<string>;
}

export class Google {
    _id?: Nullable<string>;
    token?: Nullable<string>;
    name?: Nullable<string>;
    email?: Nullable<string>;
}

export class Facebook {
    _id?: Nullable<string>;
    token?: Nullable<string>;
    name?: Nullable<string>;
    email?: Nullable<string>;
}

export class User {
    _id: string;
    local?: Nullable<Local>;
    google?: Nullable<Google>;
    facebook?: Nullable<Facebook>;
    firstName: string;
    lastName: string;
    avatar?: Nullable<string>;
    gender: Gender;
    resetPasswordToken?: Nullable<string>;
    resetPasswordExpires?: Nullable<number>;
    fullName?: Nullable<string>;
    isVerified: boolean;
    isActivated?: Nullable<boolean>;
    isOnline: boolean;
    isLocked: boolean;
    reason: string;
    isActive: boolean;
    stripeId?: Nullable<string>;
    type: UserType;
    ccLast4?: Nullable<string>;
    createdAt: number;
    updatedAt: number;
}

export abstract class IQuery {
    abstract hello(): string | Promise<string>;

    abstract me(): Nullable<User> | Promise<Nullable<User>>;

    abstract users(offset?: Nullable<number>, limit?: Nullable<number>): Nullable<User[]> | Promise<Nullable<User[]>>;

    abstract user(_id: string): Nullable<User> | Promise<Nullable<User>>;

    abstract searchUser(userIds?: Nullable<string[]>): UserResult | Promise<UserResult>;

    abstract today(): Nullable<Date> | Promise<Nullable<Date>>;
}

export abstract class IMutation {
    abstract createUser(input: CreateUserInput): Nullable<User> | Promise<Nullable<User>>;

    abstract updateUser(_id: string, input: UpdateUserInput): Nullable<boolean> | Promise<Nullable<boolean>>;

    abstract updateAvatar(_id: string, file: Upload): Nullable<boolean> | Promise<Nullable<boolean>>;

    abstract deleteUser(_id: string): Nullable<boolean> | Promise<Nullable<boolean>>;

    abstract deleteUsers(): boolean | Promise<boolean>;

    abstract verifyEmail(emailToken: string): Nullable<boolean> | Promise<Nullable<boolean>>;

    abstract login(input: LoginUserInput): Nullable<LoginResponse> | Promise<Nullable<LoginResponse>>;

    abstract refreshToken(refreshToken: string): Nullable<RefreshTokenResponse> | Promise<Nullable<RefreshTokenResponse>>;

    abstract lockAndUnlockUser(_id: string, reason: string): Nullable<boolean> | Promise<Nullable<boolean>>;

    abstract changePassword(_id: string, currentPassword: string, password: string): Nullable<boolean> | Promise<Nullable<boolean>>;

    abstract forgotPassword(email: string): Nullable<boolean> | Promise<Nullable<boolean>>;

    abstract resetPassword(resetPasswordToken: string, password: string): Nullable<boolean> | Promise<Nullable<boolean>>;

    abstract createSubscription(source: string, ccLast4: string): Nullable<User> | Promise<Nullable<User>>;

    abstract changeCreditCard(source: string, ccLast4: string): Nullable<User> | Promise<Nullable<User>>;

    abstract validateUser(text: string, input: CreateUserInput): Nullable<boolean> | Promise<Nullable<boolean>>;
}

export abstract class ISubscription {
    abstract newUser(): Nullable<User> | Promise<Nullable<User>>;
}

export type JSON = any;
export type JSONObject = any;
export type Upload = any;
export type UserResult = User | Users;
type Nullable<T> = T | null;
