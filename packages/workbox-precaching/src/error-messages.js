let messages = (process.env.NODE_ENV === 'production') ? null : {
  'example-error-code': `Hello I'm the first example error message`,
  'example-two': `Hello, I'm the second example error message`
};

export default messages;
