import express, { Application } from "express";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import { json, urlencoded } from "body-parser";

import config from "./config/env";

/**
 * Creates an express instance.
 *
 * @returns {import("express").Application} express instance.
 */
class App {
  public server: Application;
  private _env: String;

  constructor() {
    this.server = express();
    this._env = config.NODE_ENV || "development";

    this.loaders();
  }

  private loaders() {
    if (this._env === "production") {
      this.server.use(helmet());
      this.server.use(compression());
    } else {
      this.server.use(cors());
    }

    this.server.use(json());
    this.server.use(urlencoded({ extended: true }));
  }
}

export default new App().server;