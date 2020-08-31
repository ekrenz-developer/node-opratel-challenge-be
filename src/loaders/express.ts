import { Application, Request, Response, NextFunction } from "express";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import { json, urlencoded } from "body-parser";
import { JSONResponse, ResponseError } from "../utils/JSONResponse";
import setRoutes from "../routes/index";
import middlewares from "../middlewares/index";
//import config from "../config/env";

const expressLoader = (server: Application) => {
  /*
  if (config.NODE_ENV === "production") {
    server.use(helmet());
    server.use(compression());
  } else {
    server.use(cors());
  }
  */
  server.use(helmet());
  server.use(compression());
  server.use(cors());

  server.use(json());
  server.use(urlencoded({ extended: true }));

  setRoutes(server);

  server.use(middlewares.notFoundHandler);

  server.use((err: ResponseError, req: Request, res: Response, next: NextFunction) => {
    JSONResponse.handleError(res, err)
  });
}

export default expressLoader;