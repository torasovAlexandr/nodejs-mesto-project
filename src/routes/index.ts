import { Router } from 'express';
import { celebrate, Joi } from "celebrate";
import userRouter from './users';
import cardRouter from "./cards";
import { signin, signup } from "../controllers/users";
import auth from "../middleware/auth";

const router = Router();

router.post(
  '/signup',
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().max(30),
      about: Joi.string().max(200),
      email: Joi.string().email(),
      password: Joi.string(),
      avatar: Joi.string().uri(),
    }).unknown(true),
  }),
  signup,
);

router.post(
  '/signin',
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().email(),
      password: Joi.string(),
    }).unknown(true),
  }),
  signin,
);

router.use(auth);
router.use('/users', userRouter);
router.use('/cards', cardRouter);

export default router;
