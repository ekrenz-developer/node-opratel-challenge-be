import { Application } from "express";
import mongooseLoader from "./mongoose";
import expressLoader from "./express";

async function setLoaders(server: Application) {
  const mongoConnection = await mongooseLoader();
  await expressLoader(server);
}

export default setLoaders;