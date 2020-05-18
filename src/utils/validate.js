export const required = (value) => {
  if (value) return undefined;
  return "это обязательное поле.";
};

export const aboutMeValidate = (value) => {
  if(value.length < 1000) return undefined;
  return 'масимально количество символов: 1000'
}

export const maxLength = (maxLength) => (value) => {
  if (value.length > maxLength)
    return `максимальное кол-во символов: ${maxLength}`;
  return undefined;
};
