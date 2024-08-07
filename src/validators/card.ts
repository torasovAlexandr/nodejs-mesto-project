import { celebrate, Joi } from "celebrate";

const cardPostValidator = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    link: Joi.string().uri(),
  }),
});

const cardDeleteValidator = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().length(24).hex().required(),
  }),
});
const cardLIKEValidator = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().length(24).hex().required(),
  }),
});

export {
  cardPostValidator, cardDeleteValidator, cardLIKEValidator,
};
