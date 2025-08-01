import { model, Schema } from "mongoose";
import { IUser } from "../interfaces/user.interface";
import  validator  from "validator";


const UserSchema = new Schema<IUser>({
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

})


export const User = model<IUser>("User",UserSchema);