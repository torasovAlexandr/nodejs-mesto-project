import { celebrate, Joi } from "celebrate";

const cardPostValidator = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    link: Joi.string().uri(),
  }).unknown(true),
});

const cardDeleteValidator = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().length(24).hex().required(),
  }).unknown(true),
});
const cardLIKEValidator = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().length(24).hex().required(),
  }).unknown(true),
});

export {
  cardPostValidator, cardDeleteValidator, cardLIKEValidator,
};
