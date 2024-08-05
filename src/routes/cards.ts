import { Router } from 'express';
import { celebrate, Joi } from "celebrate";
import {
  createCard, deleteCard, dislikeCard, getCards, likeCard,
} from '../controllers/cards';

const cardRouter = Router();
cardRouter.get('/', getCards);
cardRouter.post(
  '/',
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().min(2).max(30),
      link: Joi.string().uri(),
    }).unknown(true),
  }),
  createCard,
);

cardRouter.delete(
  '/:cardId',
  celebrate({
    params: Joi.object().keys({
      cardId: Joi.string().alphanum(),
    }).unknown(true),
  }),
  deleteCard,
);

cardRouter.put(
  '/:cardId/likes',
  celebrate({
    params: Joi.object().keys({
      cardId: Joi.string().alphanum(),
    }).unknown(true),
  }),
  likeCard,
);

cardRouter.delete(
  '/:cardId/likes',
  celebrate({
    params: Joi.object().keys({
      cardId: Joi.string().alphanum(),
    }).unknown(true),
  }),
  dislikeCard,
);

export default cardRouter;
