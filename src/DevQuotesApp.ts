import express, { Express } from 'express';
import mongoose, { Mongoose } from 'mongoose';
import path from 'path';
import appConfig from './app.config'
import { appRoutes } from './routes/AppRoutes';
import { quoteRoutes } from './routes/QuoteRoutes';

export class DevQuotesApp {
  app: Express;
  db: Promise<Mongoose>;
  staticPath: string;

  constructor() {
    this.app = express();
    this.db = mongoose.connect(appConfig.databaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    this.initalise();
  }

  initalise() {
    this.app.use('/api/quote', quoteRoutes);
    this.app.use('/', appRoutes);
    this.staticPath = path.join(__dirname, 'public');
    this.app.use(express.static(this.staticPath));
  }

  serve() {
    this.app.listen(appConfig.port, () =>
      console.log(`DevQuotes API listening : ${appConfig.port} [Static Content: ${this.staticPath}]`)
    );
  }
}
