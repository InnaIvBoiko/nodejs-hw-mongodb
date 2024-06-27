import { Schema, model } from 'mongoose';

const PatchContact = new Schema(
  {
    name: {
      type: String,
      required: false,
    },
    phoneNumber: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    isFavourite: {
      type: Boolean,
      required: false,
      default: false
    },
    contactType: {
      type: String,
      required: false,
      enum: ['work', 'home', 'personal'],
      default: 'personal',
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'users',
    },
  },
  {
    timestamps: true,
  },
);

export const PatchContactsCollection = model('contact', PatchContact);