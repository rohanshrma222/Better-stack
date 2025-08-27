import express from "express";
const app = express();

app.post("/website",(req,res) =>{

});

app.get("/status/:websiteId",(req,res)=>{

})

app.listen(process.env.PORT || 3000,()=>{
    console.log("Server is running on port 3000");
})