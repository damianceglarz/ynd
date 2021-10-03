export const pxToRem = (px: number) => {
  const baseSize = 16;
  return `${px / baseSize}rem`;
};
export const spacing = (i: number | number[]) => {
  const baseSize = 8;
  return `${px / baseSize}px`;
};
