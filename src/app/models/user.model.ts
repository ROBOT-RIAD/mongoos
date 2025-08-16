import { Model, model, Schema } from "mongoose";
import { IAddress, IUser, UserInstancemethods, UserStaticmethods } from "../interfaces/user.interface";
import  validator  from "validator";
import bcrypt from "bcryptjs";

const addressSchema = new Schema<IAddress>({
    city :{ type : String},
    street : { type : String},
    zip : { type : Number}, 
},{
   _id : false 
})


const UserSchema = new Schema<IUser,UserStaticmethods,UserInstancemethods>({
    first_name:{
        type: String,
        required: true,
        trim:true,
        minlength:5,
        maxlength:50,
    },
    last_name:{
        type: String,
        required: true,
        trim:true
    },
    age:{
        type:Number,
        required : true,
        min:18,
        max:60,
    },
    email:{
        type: String,
        required: true,
        trim:true,
        lowercase: true,
        unique:true,
        validate:[validator.isEmail]
    },
    password:{
        type: String,
        required: true,
    },
    role:{
        type: String,
        enum : ['user','admin'],
        default: 'user'
    },
    address : { type : addressSchema}
},
{
    versionKey:false,
    timestamps: true,
})

UserSchema.method("hashPassword",async function(planpassword : string){
 const password = await bcrypt.hash(planpassword,8)
 return password
})


UserSchema.static("hashPassword",async function(planpassword : string){
 const password = await bcrypt.hash(planpassword,8)
 return password
})


export const User = model<IUser, UserStaticmethods>("User",UserSchema);