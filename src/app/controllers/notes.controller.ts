import { Note } from "../models/notes.model";
import express,{Application , Request, Response} from "express";

export const notesRouters = express.Router();


notesRouters.post('/note/create_note',async(req : Request , res : Response)=>{
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

notesRouters.get('/note',async(req : Request , res : Response)=>{
    const note = await Note.find();
    res.send(note)
})
notesRouters.get('/note/:noteId',async(req : Request , res : Response)=>{
    const noteId = req.params.noteId;
    const note = await Note.findById(noteId);
    res.send(note)
})

notesRouters.patch('/note/:noteId',async(req : Request , res : Response)=>{
    const body = req.body;
    const noteId = req.params.noteId;
    const note = await Note.findByIdAndUpdate(noteId,body,{new:true, });   
    res.send(note)
})

notesRouters.delete('/note/:noteId',async(req : Request , res : Response)=>{
    const noteId = req.params.noteId;
    const note = await Note.findByIdAndDelete(noteId);   
    res.send(note)
})