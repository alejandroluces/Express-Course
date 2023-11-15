const express = require("express")
const axios = require("axios")

const router = express.Router()

router.get("/", (req,res) => {
    res.render("index",{title: "index Page"}) //Esto seria lo mismo. Con EJS, express gana esta funcionalidad para renderizar archivo
})

router.get("/about", (req,res) => {
    res.render("about") //Esto seria lo mismo. Con EJS, express gana esta funcionalidad para renderizar archivo
})

router.get("/Dasboard", (req,res) =>{
    res.render("dashboard")//Nombre del archivo
})

router.get("/posts", async (req,res) => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    
     //res.send(response.data)Esto es para enviar solo el texto en formato 
   
    
    res.render("posts", {
        posts:response.data //Aca le pasamos los datos que nos trae la API
    }) 
})

module.exports = router