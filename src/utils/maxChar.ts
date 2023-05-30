export const maxChar = (text: string, numberMaxOfChars: number) => {
  if (text && text.length >= numberMaxOfChars) {
    return text.slice(0, numberMaxOfChars - 3) + "...";
  }
  return text;
};
