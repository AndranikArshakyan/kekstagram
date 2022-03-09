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
let removeClass = (element, Class) =>{
    element.classList.remove(Class);
};
let addClass = (element, Class) =>{
    element.classList.add(Class);
};
let shuffle = (array)=> {
    return array.sort(() => Math.random() - 0.5);
};
let sort = (array) =>{
    return array.sort(function (a, b) {
        if (a.comments.length > b.comments.length) {
          return -1;
        }
        if (a.comments.length < b.comments.length) {
          return 1;
        }
        return 0;
    });
};
export {getRandomInt, stringCount, getRandomElement, isEscCode, removeClass, addClass, shuffle, sort};
