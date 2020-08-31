import { Types } from "mongoose";
import {Request, Response, NextFunction } from "express";
import Service from "../services/Service";
import JSONResponse from "../utils/JsonResponse";

class Controller {
  public service: Service;

  constructor(service: Service) {
    this.service = service;
    this.get = this.get.bind(this);
    this.getAll = this.getAll.bind(this);
    this.insert = this.insert.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async get(req: Request, res: Response, next: NextFunction) {
    try {
      let response = await this.service.get(req.params);
      response.code = 200;

      return JSONResponse.handleSuccess(res, response);
    } catch (err) {
      next(err);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      let response = await this.service.getAll(req.query);
      response.code = 200;

      return JSONResponse.handleSuccess(res, response);
    } catch (err) {
      next(err);
    }
  }

  async insert(req: Request, res: Response, next: NextFunction) {
    try {      
      let response = await this.service.insert(req.body);

      response.code = 201;

      return JSONResponse.handleSuccess(res, response);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { _id } = req.params;

      let response = await this.service.update(Types.ObjectId(_id), req.body);
      response.code = 202;

      return JSONResponse.handleSuccess(res, response);
    } catch (err) {
      next(err);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { _id } = req.params;
      let response = await this.service.delete(Types.ObjectId(_id));
      response.code = 202;

      return JSONResponse.handleSuccess(res, response);
    } catch (err) {
      next(err);
    }
  }
}

export default Controller;