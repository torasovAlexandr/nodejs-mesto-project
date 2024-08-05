import { Router } from 'express';
import { celebrate, Joi } from "celebrate";
import {
  getUserById, getUsers, updateAvatar, updateUser, getMe,
} from '../controllers/users';

const userRouter = Router();

userRouter.get('/', getUsers);
userRouter.get('/me', getMe);
userRouter.get(
  '/:userId',
  celebrate({
    params: Joi.object().keys({
      userId: Joi.string().alphanum(),
    }).unknown(true),
  }),
  getUserById,
);
userRouter.patch(
  '/me',
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().max(30),
      about: Joi.string().max(200),
      email: Joi.string().email(),
      password: Joi.string(),
      avatar: Joi.string().uri(),
    }).unknown(true),
  }),
  updateUser,
);
userRouter.patch('/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().uri(),
  }).unknown(true),
}), updateAvatar);

export default userRouter;
