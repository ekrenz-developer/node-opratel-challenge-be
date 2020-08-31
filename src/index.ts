import "dotenv/config";
import express, { Application } from "express";
import config from "./config/env";
import setLoaders from "./loaders/index";

async function startServer() {
  const server: Application = express();
  const port: Number = Number(config.PORT) || 8080;

  await setLoaders(server);
  
  server.listen(port, () => {
    console.log(`Server is up in port ${port}`);
  })
}

startServer();