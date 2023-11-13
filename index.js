const express = require("express");
const app = express();

app.use((req,res,next) =>{
    console.log(`Ruta: ${req.url} y metodo: ${req.method}`);  
    
    next()
})
app.get("/profile", (req,res) => {
    res.send("profile page")
})

app.all("/about", (req,res) => {
    res.send("about profile")
})

app.use((req,res,next) =>{
    if(req.query.login ==="aluces@gmail.com"){
        next()
    }else{
        res.send("no autorizado")
    }
})

app.get("/Dasboard", (req,res) =>{
    res.send("Dashboard page..!!")
})


   

app.listen(3000);
console.log(`Server on port ${3000}`);
