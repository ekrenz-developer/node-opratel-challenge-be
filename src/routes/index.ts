import { Application } from "express";
import userRouter from "./userRouter";

function setRoutes(server: Application) {
  userRouter(server);
};

export default setRoutes;