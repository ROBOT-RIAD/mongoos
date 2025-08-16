import { Model } from "mongoose";

export interface IAddress{
    city : string,
    street : string,
    zip : number
}



export interface IUser{
    first_name : string,
    last_name: string,
    age : number,
    email : string,
    password : string,
    role : 'user' | 'admin',
    address : IAddress
}


export interface UserInstancemethods{
    hashPassword(password : string) : string;
}


export interface UserStaticmethods extends Model<IUser>{
    hashPassword(password : string) : string;
}