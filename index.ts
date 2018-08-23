import 'reflect-metadata';

import * as bodyParser from 'body-parser';
import * as express from 'express'; 
import * as cors from "cors";
import { Container } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';

import { bindings } from './inversify.config';

class Server {
  public static app: express.Application;
  private static server: InversifyExpressServer;

  public static async bootstrap() {

    const container = new Container();
    await container.loadAsync(bindings);

    this.server = new InversifyExpressServer(container);
    this.server.setConfig((app) => {
      app.use(cors({
        allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Access-Control-Allow-Headers", "Accept", "X-Access-Token", "X-Requested-With", "Access-Control-Request-Headers", "Authorization", ],
        credentials: true,
        methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
        origin: '*',
        preflightContinue: false
      }));
      // Disable default cache
      app.set("etag", false);
      
      // add body parser
      app.use(bodyParser.urlencoded({
        extended: true
      }));
      app.use(bodyParser.json());
    });

    this.app = this.server.build();


    this.app.listen(process.env.APP_PORT || 3000 , () => {
    });
  }
}
export const server = Server.bootstrap();