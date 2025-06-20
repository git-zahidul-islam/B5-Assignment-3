import express, { Application, Request, Response }  from "express";

export const app : Application = express();

app.get('/',async(req : Request,res : Response)=>{
    console.log("server running");
})