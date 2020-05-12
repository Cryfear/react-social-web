export const required = (value) => {
  if (value) return undefined;
  return "это обязательное поле.";
};

export const maxLength = (maxLength) => (value) => {
  if (value.length > maxLength)
    return `максимальное кол-во символов: ${maxLength}`;
  return undefined;
};
