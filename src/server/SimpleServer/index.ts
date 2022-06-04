import express, { Application } from "express";
import * as http from "http";
import { ServerConfig } from "./types";

class SimpleServer {
  server: http.Server | undefined;
  app: Application | undefined;
  config: ServerConfig;
  constructor(config: ServerConfig) {
    this.config = config;
  }

  private configureExpressApp() {
    this.app = express();
    this.app.set("port", this.config.port);
  }

  public start() {
    if (this.app) {
      this.configureExpressApp();
    }

    // create http server
    this.server = http.createServer(this.app);

    this.server.listen();
  }
}

export default SimpleServer;
