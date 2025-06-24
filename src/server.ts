import {Server} from 'http';
import mongoose from 'mongoose';

import app from './app';


let server: Server;
const PORT=5000


async function main() {
    try{

        await mongoose.connect('mongodb+srv://Todo:vcUwhCpcYF7Dzsvp@cluster0.b18k8.mongodb.net/todoDB?retryWrites=true&w=majority&appName=Cluster0');
        
        server = app.listen( PORT ,()=>{
            console.log(`app is running on port ${PORT}`)
        })
    }
    catch ( error){
        console.log(error);
    }   
}



main();

