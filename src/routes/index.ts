import { Router } from 'express';
import userRouter from './users';
import cardRouter from "./cards";
import { signin, signup } from "../controllers/users";
import auth from "../middleware/auth";
import NotFoundError from "../errors/not-found-error";
import { userPostValidator, userSignInValidator } from "../validators/user";

const router = Router();

router.post(
  '/signup',
  userPostValidator,
  signup,
);

router.post(
  '/signin',
  userSignInValidator,
  signin,
);

router.use(auth);
router.use('/users', userRouter);
router.use('/cards', cardRouter);
router.use('*', (_req, _res, next) => {
  next(new NotFoundError());
});

export default router;
