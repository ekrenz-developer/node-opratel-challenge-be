import { Application, Request, Response, NextFunction } from "express";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import { json, urlencoded } from "body-parser";
import JSONResponse, { ResponseError } from "../utils/JsonResponse";
import setRoutes from "../routes/index";
import config from "../config/env";
import UserController from "../controllers/UserController";

const expressLoader = (server: Application) => {
  if (config.NODE_ENV === "production") {
    server.use(helmet());
    server.use(compression());
  } else {
    server.use(cors());
  }

  server.use(json());
  server.use(urlencoded({ extended: true }));

  setRoutes(server);
  //server.post("/api/users", UserController.insert);

  //server.use(middlewares.notFoundHandler);

  server.use((err: ResponseError, req: Request, res: Response, next: NextFunction) => {
    JSONResponse.handleError(res, err)
  });
}

export default expressLoader;