import express from "express";
import routes from "./routes/index.js";
import connectionDB from "./config/dbConnection.js";
import errorHandler from "./middlewares/errorHandler.js";
import handler404 from "./middlewares/handler404.js";

const app = express();
routes(app);

app.use(handler404);

app.use(errorHandler);

const connection = await connectionDB()


connection.on("error", (e) => {
    console.error("Houve um erro de conexão com o banco de dados!" + e);
});

connection.once("open",  () => { 
    console.log("Conexão com o banco de dados efetuado com sucesso!");
});

export default app