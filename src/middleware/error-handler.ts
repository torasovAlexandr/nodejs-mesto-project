import { ErrorRequestHandler } from 'express';
import { constants } from 'http2';

const errorHandler: ErrorRequestHandler = (err, _req, res) => {
  const statusCode = err.statusCode || constants.HTTP_STATUS_INTERNAL_SERVER_ERROR;
  const message = statusCode === constants.HTTP_STATUS_INTERNAL_SERVER_ERROR
    ? 'На сервере произошла ошибка' : err.message;

  res.status(statusCode).send({ message });
};

export default errorHandler;
