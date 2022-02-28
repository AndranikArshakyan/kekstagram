let getRandomInt = (min, max) => {
    if (min < 0 || max < 0) {
      return -1;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
  
const stringCount = (string, length) => {
    return string.length <= length;
};

let getRandomElement = (array) => {
    return array[getRandomInt(0, array.length - 1)];
};
let isEscCode = (evt) => {
    return evt.key == "Escape" || evt.key == "Esc";
};

export {getRandomInt, stringCount, getRandomElement, isEscCode};
