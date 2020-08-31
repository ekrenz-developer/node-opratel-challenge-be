import { Request, Response, NextFunction } from "express";
import { ResponseError } from "../utils/JSONResponse";

const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  next(new ResponseError("Endpoint nor found", 404));
}

const middlewares = {
  notFoundHandler
}

export default middlewares;