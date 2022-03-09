import {getRandomInt, getRandomElement} from "./util.js";

const PHOTO_COUNTS = 25;
const AVATAR_COUNTS = {
  min: 1,
  max: 6
}
const LIKES_COUNT = {
  min: 25,
  max: 200
}
const COMMENTS_COUNT = {
  min: 1,
  max: 5
}
const COMMENTS_ID_COUNT = {
  min: 1,
  max: 1000
}
let names = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];
let messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
let photosDescriptionArray = [];

let getComment = () => {
  let comments = [];
  for (let i = 0; i < getRandomInt(COMMENTS_COUNT.min, COMMENTS_COUNT.max); i++) {
    comments[i] = {
      id: getRandomInt(COMMENTS_ID_COUNT.min, COMMENTS_ID_COUNT.max),
      avatar: `img/avatar-${getRandomInt(AVATAR_COUNTS.min, AVATAR_COUNTS.max)}.svg`,
      message: getRandomElement(messages),
      name: getRandomElement(names)
    };
  };
  return comments;
};

let createPhotosDescription = () => {
  for (let i = 1; i <= PHOTO_COUNTS; i++) {
    photosDescriptionArray[i-1] = {
      id: i,
      url: `photos/${i}.jpg`,
      description: `Описание ${i} фото`,
      likes: getRandomInt(LIKES_COUNT.min, LIKES_COUNT.max),
      comments: getComment()
    };
  };
  return photosDescriptionArray;
}

export {createPhotosDescription};
