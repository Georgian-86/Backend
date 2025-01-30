import express from "express";

const app = express();
const port = 3000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    // Make a request to the server to see the logs
    app.get("/",(req,res)=>{
        res.send("<h1>Hello World</h1>");
    });

    app.get("/about",(req,res)=>{
        res.send("<h1>About us</h1>");
    });

    app.get("/contact",(req,res)=>{
        res.send("<h1>Contact Details</h1>");
    });
})