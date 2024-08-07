import {
  model, ObjectId, Schema, Date,
} from 'mongoose';

export interface ICard {
  name:string
  link:string
  owner:ObjectId
  likes:ObjectId[]
  createdAt:Date
  updatedAt:Date
}

const cardSchema = new Schema<ICard>({
  name: {
    type: String,
    required: [true, 'Поле name не может быть пустым'],
    minlength: 2,
    maxlength: 30,
  },
  link: {
    type: String,
    required: [true, 'Поле link не может быть пустым'],
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: [true, 'Поле owner не может быть пустым'],
  },
  likes: {
    default: [],
    type: [Schema.Types.ObjectId],
    ref: 'user',

  },
}, { versionKey: false, timestamps: true });

export default model<ICard>('card', cardSchema);
