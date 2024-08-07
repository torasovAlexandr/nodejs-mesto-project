import { constants } from 'http2';

class NotFoundError extends Error {
  public statusCode: number;

  constructor(message = '404 роут не найден') {
    super(message);
    this.statusCode = constants.HTTP_STATUS_NOT_FOUND;
  }
}

export default NotFoundError;
