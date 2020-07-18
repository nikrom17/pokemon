export const getRandomNumberWithRestrictions = (
  min: number,
  max: number,
  forbidden: number[]
) => {
  let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return forbidden.find((forbiddenNumber) => forbiddenNumber === randomNumber)
    ? randomNumber + 1
    : randomNumber;
};

export const BULBASAUR = 1;
export const CHARMANDER = 4;
export const SQUIRTLE = 7;
export const genOneStarters = [BULBASAUR, CHARMANDER, SQUIRTLE];
