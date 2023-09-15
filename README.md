# NodeJS-TypeScript-TypeORM
Una CRUD simple con NodeJS y TypeScript usando TypeORM y Express con una base de datos MySQL

# Configuración Base de Datos
Se puede configurar el tipo de base de datos a usar (ejem. postgre, sqlite, mysql, etc) en el archivo ```db.ts```, así como sus credenciales

# Configuración de tsconfig.json
En tsconfig.json, elegir la carpeta a crear para el build de javascript:
```json
//Carpeta del código de TypeScript, reemplazar el ./src con la carpeta origen en cuestión
"rootDir": "./src",
//Carpeta del código de JavaScript ejecutado, reemplazar el ./dist con la carpeta destino, si no existe se creará automáticamente
"outDir": "./dist",
```

# Ejecutar el código
Puede usar los siguientes comandos:

-Para ejecutar el código typescript
```
ts-node-dev --respawn src/index.ts
```
-Para crear el build del código en javascript en la carpeta outDir seleccionada
```
tsc
```
-Para ejecutar el código javascript
```
node dist/index.js
```

# IMPORTANTE!!!
En el archivo tsconfig.json, aplicar las siguientes configuraciones en caso de tenerlas desactivadas:
```json
"strictPropertyInitialization": false,
"experimentalDecorators": true,
"emitDecoratorMetadata": true,
```