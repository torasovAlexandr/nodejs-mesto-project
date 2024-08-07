import "dotenv/config";
import express from "express";
import mongoose from 'mongoose';
import { errors } from "celebrate";
import errorHandler from './middleware/error-handler';
import router from './routes';
import { errorLogger, requestLogger } from "./middleware/logger";

const app = express();
const { PORT = "3000", MONGO_URL = "mongodb://127.0.0.1:27017/mestodb" } = process.env;

app.use(express.json());

app.use(requestLogger);
app.use(router);
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);
const connect = async () => {
  await mongoose.connect(MONGO_URL);
  console.log("Соединение с базой установлено");

  await app.listen(PORT);
  console.log("Сервер запущен на порту:", PORT);
};

connect();
