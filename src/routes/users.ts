import { Router } from 'express';
import {
  getUserById, getUsers, updateAvatar, updateUser, getMe,
} from '../controllers/users';
import { userAvatarValidator, userIdValidator, userPatchValidator } from "../validators/user";

const userRouter = Router();

userRouter.get('/', getUsers);
userRouter.get('/me', getMe);
userRouter.get('/:userId', userIdValidator, getUserById);
userRouter.patch('/me', userPatchValidator, updateUser);
userRouter.patch('/me/avatar', userAvatarValidator, updateAvatar);

export default userRouter;
