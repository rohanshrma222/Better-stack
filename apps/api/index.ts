import express from "express";
import { prismaClient } from "store/client"
import { AuthInput } from "./types";
import  jwt  from "jsonwebtoken";

const app = express();
app.use(express.json());

app.post("/website",async(req,res) =>{
    const website = await prismaClient.website.create({
        data:{
            url: req.body.url,
            timeAdded: new Date(),
            user_id: req.body.user_id
        }
    })
    
    res.json({
        id: website.id                                          
    })
});

app.get("/status/:websiteId",(req,res)=>{

})

app.post("/user/signup",async(req,res)=>{
    const data = AuthInput.safeParse(req.body.data);
    if(!data.success){
        res.status(403).send("");
        return;
    }
    try{    
        let user = await prismaClient.user.create({
            data: {
            username: data.data.username,
            password: data.data.password
            }
        })
        res.json({
            id: user.id
        })
    } catch(e){
        res.status(403).send("");
    }
})

app.post("/user/signin",async(req,res)=>{
    const data = AuthInput.safeParse(req.body.data);
    if(!data.success){
        res.status(403).send("");
        return;
    }
    let user = await prismaClient.user.findFirst({
        where:{
            username: data.data.username
        }
    })

    if(user?.password !== data.data.password){
        res.status(403).send("");
        return;
    }

    let token = jwt.sign({
        sub: user.id
    }, process.env.JWT_SECRET!)

    res.json({
        jwt: token
    })

})

app.listen(process.env.PORT || 3000,()=>{
    console.log("Server is running on port 3000");
})