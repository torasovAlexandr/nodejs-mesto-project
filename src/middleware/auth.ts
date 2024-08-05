import e, { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AuthContext } from "../types/auth-context";

const { JWT_SECRET } = process.env;
if (!JWT_SECRET) {
  throw Error('look at env');
}

export const handleAuthError = (res: Response) => {
  res
    .status(401)
    .send({ message: 'Необходима авторизация' });
};

const extractBearerToken = (header: string) => header.replace('Bearer ', '');

export default (req: Request, res: Response<unknown, AuthContext>, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return handleAuthError(res);
  }

  const token = extractBearerToken(authorization);
  let payload;
  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return handleAuthError(res);
  }

  // записываем пейлоуд в объект запроса
  if (typeof payload === 'string') return next('Не валидный токен');

  res.locals.user = payload;

  next(); // пропускаем запрос дальше
};
