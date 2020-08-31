import { Types, Model, Document} from "mongoose";
import { IResponseSuccess, ResponseError } from "../utils/JsonResponse";

class Service {
  model: any;

  constructor(model: Model<Document>) {
    this.model = model;
    this.get = this.get.bind(this);
    this.getAll = this.getAll.bind(this);
    this.insert = this.insert.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async get(param: Object) {
    try {
      let item = await this.model
        .findOne(param)
      
      if (!item) {
        throw new ResponseError('Item not found', 500);
      }

      const response: IResponseSuccess = {
        error: false,
        data: item
      }
      
      return response;

    } catch (err) {
      throw err;
    }
  }

  async getAll(query: any) {
    let { skip, limit } = query;
    
    skip = skip ? Number(skip) : 0;
    limit = limit ? Number(limit) : 10;
    
    delete query.skip;
    delete query.limit;
    
    try {
      let items = await this.model
        .find(query)
        .skip(skip)
        .limit(limit)
      
      const response: IResponseSuccess = {
        error: false,
        data: items
      };

      return response;
    } catch (err) {
      throw err;
    }
  }

  async insert(data: any) {
    try {
      let item = await this.model.create(data);

      if (!item) {
        throw new ResponseError('Insert error', 404);
      }
      
      const response: IResponseSuccess = {
        error: false,
        data: item
      }

      return response;
    } catch (err) {
      throw err
    }
  }

  async update(id: Types.ObjectId, data: any) {
    try {
      if (!Types.ObjectId.isValid(id)) {
        throw new ResponseError('Invalid id', 400);
      }

      let item = await this.model.findByIdAndUpdate(id, data, { new: true });
      if (!item) {
        throw new ResponseError('Update error', 500);
      }

      console.log(item);
      const response: IResponseSuccess = {
        error: false,
        data: item
      }

      return response;
    } catch (err) {
      throw err
    }
  }

  async delete(id: Types.ObjectId) {
    try {
      if (!Types.ObjectId.isValid(id)) {
        throw new ResponseError('Invalid id', 400);
      }

      let item = await this.model.findByIdAndDelete(id);
      if (!item) {
        throw new ResponseError('Invalid id', 404);
      }

      const response: IResponseSuccess = {
        error: false,
        data: item
      }

      return response;
    } catch (err) {
      throw err
    }
  }
}

export default Service;