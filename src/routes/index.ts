import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTES = __dirname;
const router = Router();

const removeExtension = (filename: string) => {
  return filename.split(".").shift();
};

readdirSync(PATH_ROUTES).filter((filename) => {
  const cleanName = removeExtension(filename);
  if (cleanName !== "index") {
    import(`./${cleanName}`).then((moduleRouter) => {
      console.log(`Se está cargando la ruta.... /${cleanName}`);
      router.use(`/${cleanName}`, moduleRouter.router);
    });
  }
});

export { router };
