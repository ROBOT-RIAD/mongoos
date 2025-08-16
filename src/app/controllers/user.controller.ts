import z from "zod";
import { User } from "../models/user.model";
import express,{Application , Request, Response} from "express";


export const UserRouters = express.Router();


const CreateUserZodSchema = z.object({
    firstname : z.string(),
    last_name: z.string(),
    age : z.number(),
    email : z.string(),
    password : z.string(),
    role : z.string().optional()
})


UserRouters.post('/user/create_user',async(req : Request , res : Response)=>{
    try{
        const body = await CreateUserZodSchema.parse(req.body);

        const password = await User.hashPassword(body.password);
        body.password = password
       
        const user = await User.create(body);
        // user.hash
        // const user = new User(body)
        // const password = await user.hashPassword(body.password)
        // user.password = password
        // await user.save()
        res.status(201).json(user);

    }catch(error){

    }
})

UserRouters.get('/user',async(req : Request , res : Response)=>{
    const user = await User.find();
    res.send(user)
})
UserRouters.get('/user/:userId',async(req : Request , res : Response)=>{
    const userId = req.params.userId;
    const user = await User.findById(userId);
    res.send(user)
})

UserRouters.patch('/user/:userId',async(req : Request , res : Response)=>{
    const body = req.body;
    const userId = req.params.userId;
    const user = await User.findByIdAndUpdate(userId,body,{new:true, });   
    res.send(user)
})




UserRouters.delete('/user/:userId',async(req : Request , res : Response)=>{
    const userId = req.params.userId;
    const user = await User.findByIdAndDelete(userId);   
    res.send(user)
})