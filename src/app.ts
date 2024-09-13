import express, {
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
} from "express";
import cors from "cors";
import logger from "morgan";
import { databaseConfig } from "./database";
import { swaggerUi, specs } from "./swagger";
import "reflect-metadata";
import { UserRouter } from "./routers";

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(
  (
    err: ErrorRequestHandler,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    res.status(500).send("Internal Server Error");
  }
);
app.get("/", (req: any, res: any) => {
  res.send("hello world!");
});

databaseConfig();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use("/users", UserRouter);

export default app;
