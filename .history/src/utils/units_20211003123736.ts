export const pxToRem = (px: number) => {
  const baseSize = 16;
  return `${px / baseSize}rem`;
};
export const spacing = (numbers: number | number[]) => {
  const baseSize = 8;
  if (Array.isArray(numbers)) {
    return numbers.map((el) => `${el * baseSize}px`).join(", ");
  } else {
    return `${numbers * baseSize}px`;
  }
};
