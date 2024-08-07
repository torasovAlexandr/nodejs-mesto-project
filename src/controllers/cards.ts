import { NextFunction, Request, Response } from "express";
import { constants } from "http2";
import { Error as MongooseError } from "mongoose";
import BadRequestError from "../errors/bad-request-error";
import ConflictError from '../errors/conflict-error';
import NotFoundError from "../errors/not-found-error";
import Card from "../models/card";
import { AuthContext } from "../types/auth-context";
import ForbiddenError from "../errors/forbidden-error";

const getCards = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const cards = await Card.find({});
    res.send(cards);
  } catch (error) {
    next(error);
  }
};

const createCard = async (req: Request, res:Response<unknown, AuthContext>, next: NextFunction) => {
  try {
    const newCard = await Card.create({ ...req.body, owner: res.locals.user._id });
    return res.status(constants.HTTP_STATUS_CREATED).send(newCard);
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

const deleteCard = async (req: Request, res:Response<unknown, AuthContext>, next: NextFunction) => {
  try {
    const { cardId } = req.params;
    const owner = res.locals?.user?._id || '';

    const card = await Card.findById(cardId).orFail(
      () => new NotFoundError("карточка не найдена"),
    );
    if (card?.owner.toString() !== owner) return next(new ForbiddenError());

    await Card.deleteOne({ _id: cardId });

    return res.send(card);
  } catch (error) {
    if (error instanceof MongooseError.CastError) {
      return next(new BadRequestError("Не валидный id"));
    }
    return next(error);
  }
};

const likeCard = async (req: Request, res:Response<unknown, AuthContext>, next: NextFunction) => {
  try {
    const { cardId } = req.params;
    const newCard = await Card.findByIdAndUpdate(
      { _id: cardId },
      { $addToSet: { likes: res.locals.user._id } }, // добавить _id в массив, если его там нет
      { new: true },
    ).orFail(
      () => new NotFoundError("карточка не найдена"),
    );
    return res.send(newCard);
  } catch (error) {
    if (error instanceof MongooseError.CastError) {
      return next(new BadRequestError("Не валидный id"));
    }
    return next(error);
  }
};

const dislikeCard = async (
  req: Request,
  res:Response<unknown, AuthContext>,
  next: NextFunction,
) => {
  try {
    const { cardId } = req.params;
    const newCard = await Card.findByIdAndUpdate(
      { _id: cardId },
      { $pull: { likes: res.locals.user._id } }, // добавить _id в массив, если его там нет
      { new: true },
    ).orFail(
      () => new NotFoundError("карточка не найдена"),
    );
    return res.send(newCard);
  } catch (error) {
    if (error instanceof MongooseError.CastError) {
      return next(new BadRequestError("Не валидный id"));
    }
    return next(error);
  }
};

export {
  createCard, getCards, deleteCard, likeCard, dislikeCard,
};
