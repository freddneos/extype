import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as helmet from "helmet";
import * as cors from "cors";
import { Request, Response } from "express";

createConnection()
  .then(async (connection) => {
    // create express app
    const app = express();
    // Call midlewares

    app.use(cors());
    app.use(helmet());
    app.use(bodyParser.json());

    // start express server
    app.listen(3000);

    console.log(
      "Express server has started on port 3000. Open http://localhost:3000/users to see results"
    );
  })
  .catch((error) => console.log(error));
