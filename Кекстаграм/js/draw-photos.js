import { createPhotosDescription } from "./create-photos-description.js";

let pictureTemplate = document.querySelector('#picture').content;
let pictures = document.querySelector('.pictures');
let picturesListFragment = document.createDocumentFragment();
let photos = createPhotosDescription();

let drawPhotos = () =>{
    photos.forEach((photo)=>{
        let pictureElement = pictureTemplate.cloneNode(true); 
        pictureElement.querySelector('.picture__img').src = photo.url;
        pictureElement.querySelector('.picture__likes').textContent = photo.likes;
        pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;
        picturesListFragment.appendChild(pictureElement);
    });
    pictures.appendChild(picturesListFragment);
};

export {drawPhotos, photos};
