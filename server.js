import "dotenv/config";
import app from "./src/app.js";


app.listen(process.env.PORT, () => {
    console.log("O servidor está ouvindo na porta " + process.env.PORT);
});