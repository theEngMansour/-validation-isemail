const REGEX_EMAIL = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,6}$/;

function isEmailValid(email) {
  return REGEX_EMAIL.test(email);
}

export { isEmailValid }