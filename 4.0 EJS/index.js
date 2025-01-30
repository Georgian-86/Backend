import express from "express";
import {dirname} from "path"; // Import path module

const app = express();
const port = 3000;

// Set the views directory
app.set('view engine', 'ejs'); // Set the view engine to ejs

app.get("/", (req,res)=>{
    const today = new Date("Jan 26, 2025 11:13:00");
    const day = today.getDay();
    console.log(day);
    if (day >0 && day <=5){
        res.render("index.ejs", {
            dayType: "a weekday",
            advice: "time to work hard!",
        });
    }else{
        res.render("index.ejs", {
            dayType: "a weekend",
            advice: "time to relax!",
        });
    }
    
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
