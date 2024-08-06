import { constants } from 'http2';

class NotAuthorizedError extends Error {
  public statusCode: number;

  constructor(message='ошибка авторизации') {
    super(message);
    this.statusCode = constants.HTTP_STATUS_UNAUTHORIZED;
  }
}

export default NotAuthorizedError;
