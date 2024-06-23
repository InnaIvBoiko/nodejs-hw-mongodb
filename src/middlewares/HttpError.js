import { createContactSchema } from '../validation/contacts.js';

const HttpError = createContactSchema.validate();
if (HttpError.error) {
  console.error(HttpError.error.message);
} else {
  console.log('Data is valid!');
};

export default HttpError;