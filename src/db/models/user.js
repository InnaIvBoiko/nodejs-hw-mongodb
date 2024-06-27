import { Schema, model } from 'mongoose';

const User = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    
    email: {
      type: String,
      email: true,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

User.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

export const UsersCollection = model('users', User);