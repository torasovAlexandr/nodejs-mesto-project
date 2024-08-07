import { Router } from 'express';
import {
  createCard, deleteCard, dislikeCard, getCards, likeCard,
} from '../controllers/cards';
import { cardDeleteValidator, cardLIKEValidator, cardPostValidator } from "../validators/card";

const cardRouter = Router();
cardRouter.get('/', getCards);
cardRouter.post('/', cardPostValidator, createCard);
cardRouter.delete('/:cardId', cardDeleteValidator, deleteCard);
cardRouter.put('/:cardId/likes', cardLIKEValidator, likeCard);
cardRouter.delete('/:cardId/likes', cardLIKEValidator, dislikeCard);

export default cardRouter;
