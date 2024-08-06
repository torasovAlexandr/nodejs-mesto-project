import {
  Model, model, Schema, Document,
} from 'mongoose';
import bcrypt from "bcryptjs";

export interface IUser {
  name: string;
  about : string;
  avatar : string;
  email : string;
  password : string;
}

interface UserModel extends Model<IUser> {
  findUserByCredentials: (email: string, password: string) => Promise<Document<unknown, any, IUser>>
}

const userSchema = new Schema<IUser, UserModel>({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    minlength: 2,
    maxlength: 200,
  },
  avatar: {
    type: String,
  },
  email: {
    type: String,
    required: [true, 'Поле email не может быть пустым'],
    unique: true,
    minlength: 2,
    maxlength: 50,
  },
  password: {
    type: String,
    required: [true, 'Поле password не может быть пустым'],
    select: false,
    minlength: 10,
  },

}, { versionKey: false, timestamps: true });


userSchema.static('findUserByCredentials', function findUserByCredentials(email: string, password: string) {
  return this.findOne({ email }).then((user) => {
    if (!user) {
      return Promise.reject(new Error('Неправильные почта или пароль'));
    }

    return bcrypt.compare(password, user.password).then((matched) => {
      if (!matched) {
        return Promise.reject(new Error('Неправильные почта или пароль'));
      }

      return user;
    });
  });
});

export default model<IUser, UserModel>('user', userSchema);
