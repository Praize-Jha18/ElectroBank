import express, { Request, Response, NextFunction } from 'express';
import sampleRoutes from './routes/sample';

import cookieParser from 'cookie-parser';
import createError from 'http-errors';
import dotenv from 'dotenv';
import logger from 'morgan';
import cors from 'cors';
dotenv.config();

const corsOption: cors.CorsOptions = {
  credentials: true,
  origin: ["http://localhost:5173", "*"], 
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

const app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.static("./build"));
app.use(express.urlencoded({ extended: false }));

app.use(cors(corsOption));
app.use("/api/files", sampleRoutes);

app.get("/*", (req, res) => {
  res.sendFile("index.html", {
    root: "./build",
  });
});

app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404));
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err,
  });
});

export default app;