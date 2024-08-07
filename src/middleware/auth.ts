import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AuthContext } from "../types/auth-context";
import NotAuthorizedError from "../errors/not-authorized-error";

const { JWT_SECRET = 'jwt_secret' } = process.env;

const extractBearerToken = (header: string) => header.replace('Bearer ', '');

export default (req: Request, res: Response<unknown, AuthContext>, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return next(new NotAuthorizedError());
  }

  const token = extractBearerToken(authorization);
  let payload;
  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return next(new NotAuthorizedError());
  }

  if (typeof payload === 'string') return next(new NotAuthorizedError('Не валидный токен'));

  res.locals.user = payload;

  next();
};
