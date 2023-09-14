import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes/";

import db from "./config/mongo";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors()).use(router).use(express.json);

db().then(() => console.log("Conexión Lista"));

app.listen(PORT, () => {
  console.log(`Listo por el puerto ${PORT}`);
});
