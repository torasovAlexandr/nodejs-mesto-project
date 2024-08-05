import { NextFunction, Request, Response } from "express";
import { constants } from "http2";
import { Error as MongooseError } from "mongoose";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { celebrate, Joi } from 'celebrate';
import BadRequestError from "../errors/bad-request-error";
import ConflictError from '../errors/conflict-error';
import NotFoundError from "../errors/not-found-error";
import User from "../models/user";
import { AuthContext } from "../types/auth-context";
import { handleAuthError } from "../middleware/auth";

const { JWT_SECRET } = process.env;
if (!JWT_SECRET) {
  throw Error('look at env');
}

const getUsers = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId).orFail(
      () => new NotFoundError("Пользователь не найден"),
    );
    res.send(user);
  } catch (error) {
    if (error instanceof MongooseError.CastError) {
      return next(new BadRequestError("Не валидный id"));
    }
    return next(error);
  }
};

const getMe = async (req: Request, res: Response<unknown, AuthContext>, next: NextFunction) => {
  req.params.userId = `${res.locals.user._id}`;
  getUserById(req, res, next);
};

const updateUser = (req:Request) => User.findByIdAndUpdate(
  req.params.cardId,
  req.body,
  { new: true },
);

const updateAvatar = (req:Request) => User.findByIdAndUpdate(
  req.params.cardId,
  { avatar: req.body.avatar },
  { new: true },
);

const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { password, ...params } = req.body;
    const cryptPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ password: cryptPassword, ...params });
    return res.status(constants.HTTP_STATUS_CREATED).send({
      token: jwt.sign({ _id: newUser._id }, JWT_SECRET, { expiresIn: '7d' }),
    });
  } catch (error) {
    if (error instanceof MongooseError.ValidationError) {
      return next(new BadRequestError(error.message));
    }
    if (error instanceof Error && error.message.startsWith("E11000")) {
      return next(new ConflictError("Имя уже используется"));
    }

    return next(error);
  }
};

const signin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).select('+password');
    if (!user) return handleAuthError(res);

    const match = await bcrypt.compare(password, user.password);
    if (!match) return handleAuthError(res);

    res.send({
      token: jwt.sign({ _id: user._id }, JWT_SECRET, { expiresIn: '7d' }),
    });
  } catch (err:any) {
    res.status(401).send({ message: err?.message });
  }
};

export {
  getUserById, getUsers, updateAvatar, updateUser, signup, signin, getMe,
};
