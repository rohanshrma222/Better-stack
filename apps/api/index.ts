import express from "express";
import { prismaClient } from "store/client"

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

app.listen(process.env.PORT || 3000,()=>{
    console.log("Server is running on port 3000");
})