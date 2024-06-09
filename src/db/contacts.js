import { Schema, model } from 'mongoose';

const Contact = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      match: [/\S+@\S+\.\S+/, 'is invalid'],
      required: false,
    },
    isFavourite: {
      type: Boolean,
      required: true,
      default: false
    },
    contactType: {
      type: String,
      required: true,
      enum: ['work', 'home', 'personal'],
      default: 'personal',
    },
  },
  {
    timestamps: true,
  },
);

export const ContactsCollection = model('contacts', Contact);