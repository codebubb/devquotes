import express, { Express } from "express";
import mongoose, { Mongoose } from "mongoose";
import appConfig from "./app.config"
import { appRoutes } from "./routes/AppRoutes";
import { quoteRoutes } from "./routes/QuoteRoutes";

export class DevQuotesApp {
  app: Express;
  db: Promise<Mongoose>;

  constructor() {
    this.app = express();
    this.db = mongoose.connect(appConfig.databaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    this.initalise();
  }

  initalise() {
    this.app.use("/quote", quoteRoutes);
    this.app.use("/", appRoutes);
  }

  serve() {
    this.app.listen(appConfig.port, () =>
      console.log(`DevQuotes API listening : ${appConfig.port}`)
    );
  }
}
