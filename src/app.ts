import express,{Application , Request, Response} from 'express';
import { notesRouters } from './app/controllers/notes.controller';
import { UserRouters } from './app/controllers/user.controller';


const app : Application = express();
app.use(express.json());
app.use(notesRouters);
app.use(UserRouters);




app.get('/',async(req : Request , res : Response)=>{
    res.send(' welcome monggos')
})

export default app;