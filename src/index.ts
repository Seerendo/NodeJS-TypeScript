import "reflect-metadata";
import app from "./app";
import { AppDataSource } from "./db";

async function main() {
  await AppDataSource.initialize();
  try {
    app.listen(3000, () => {
      console.log("Conectado a la base de datos");
      console.log("Server is listening on PORT", 3000);
    });
  } catch (error) {
    console.error(error);
  }
}

main();
