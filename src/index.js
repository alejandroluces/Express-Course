const express = require("express");
const morgan = require("morgan")//Este paquete permite usar Middlewares ya creados .(Reutilizar)
const path = require("path")
require("ejs") // No es necesario crearlo en una constante

const app = express();

const HomeRoutes = require("./routes/home")
const UserRoutes = require("./routes/users")


//Settings
app.set("case sensitive routing", true)
app.set("appName", "Express Course")
app.set("port", 3000)
app.set("view engine", "ejs")//Configuracion del motor de plantilla EJS
app.set("views",  path.join(__dirname, "views"))


//Middlewares
app.use(express.json())
app.use(morgan("dev"))

app.use(HomeRoutes)
app.use(UserRoutes)


//Routes
app.use("/public", express.static(path.join(__dirname, "public")))
app.use("/uploads", express.static(path.join(__dirname, "uploads")))
// app.use("/public", express.static("./public"))//Middleware para archivos estaticos(HTML,CSS,JS,IMG).Todos publico.
// app.use("/uploads", express.static("./uploads"))

app.listen(app.get("port"))
console.log(`${app.get("appName")} on port ${app.get("port")}`);



