"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "typescript.clcl2rhzoeva.us-east-1.rds.amazonaws.com",
    port: 3306,
    username: "admin",
    password: "Roannamo123_",
    database: "typescript",
    //Synchronize desactivar en producción
    /* synchronize: true, */
    logging: true,
    entities: [],
});
