import { Response } from "express";

export interface IResponseSuccess {
  error: boolean;
  code?: number;
  data: any;
}

export class ResponseError extends Error {
  error: boolean;
  code?: number;
  message: string;

  constructor(message: string, code: number = 500) {
    super();
    this.error = true;
    this.code = code;
    this.message = message;
  }
}

export class JSONResponse {
  constructor() {}

  static handleSuccess(res: Response, response: IResponseSuccess) {
    response.code = response.code || 200;
    return res.status(response.code).send(response);
  }

  static handleError(res: Response, response: ResponseError) {
    response.code = response.code || 500;

    return res.status(response.code).send(response);
  }
}