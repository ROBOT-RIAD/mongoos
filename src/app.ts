import express,{Application , Request, Response} from 'express';
import { model, Schema } from 'mongoose';


const app : Application = express();
app.use(express.json());


const noteSchema = new Schema({
    title:{ type: String , required : true ,trim : true },
    content : {type : String , default : ""},
    category : { 
        type : String ,
        enum : ["personal","work","Study"],
        default:"personal"
    },
    pinned : {
        type: Boolean,
        default: false
    },
    tags:{
        label : { type : String , required : true},
        color :{type : String , default: 'gray'}
    }
});

const Note = model('Note',noteSchema);

app.post('/note/create_note',async(req : Request , res : Response)=>{
    const body = req.body;

    // const mynote = new Note({
    //     title: "mongo",
    //     tags:{
    //         label : "data"
    //     }
    // })
    // await mynote.save();

    const note = await Note.create(body);
    res.status(201).json(note);
})


app.get('/note',async(req : Request , res : Response)=>{
    const note = await Note.find();
    res.send(note)
})
app.get('/note/:noteId',async(req : Request , res : Response)=>{
    const noteId = req.params.noteId;
    const note = await Note.findById(noteId);
    res.send(note)
})


app.get('/',async(req : Request , res : Response)=>{
    res.send(' welcome monggos')
})

export default app;