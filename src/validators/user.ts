import { celebrate, Joi } from "celebrate";

const userPostValidator = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(200),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    avatar: Joi.string().uri(),
  }),
});

const userSignInValidator = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
});

const userIdValidator = celebrate({
  params: Joi.object().keys({
    userId: Joi.string().length(24).hex().required(),
  }).unknown(true),
});
const userPatchValidator = celebrate({
  body: Joi.object().keys({
    name: Joi.string().max(30),
    about: Joi.string().max(200),
  }),
});

const userAvatarValidator = celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().uri(),
  }).unknown(true),
});

export {
  userIdValidator, userPatchValidator, userAvatarValidator, userPostValidator, userSignInValidator,
};
