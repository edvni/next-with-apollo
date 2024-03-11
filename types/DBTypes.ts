import {Document, Types} from 'mongoose';


type User = Partial<Document> &{
    id: Types.ObjectId | string;
    user_name: string;
    password: string;
}

type UserOutput = Pick<User, 'id' | 'user_name'>;

type UserInput = Omit<User, 'id' | 'role'>;

type LoginUser = Omit<User, 'password'>;

type Credentials = Pick<User, 'user_name' | 'password'>;

type TokenContent = {
    token: string;
    user: LoginUser;
}

export type {User, UserOutput, UserInput, LoginUser, Credentials, TokenContent};