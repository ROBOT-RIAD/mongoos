
export interface IUser{
    first_name : string,
    last_name: string,
    age : number,
    email : string,
    password : string,
    role : 'user' | 'admin'
}