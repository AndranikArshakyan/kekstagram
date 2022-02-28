import { drawPhotos } from "./draw-photos.js";
import { isEscCode } from "./util.js";

drawPhotos();
let fullPicturePreview = document.querySelector('.big-picture');
let fullPictureCloseButton = fullPicturePreview.querySelector('.big-picture__cancel');
let pictures = document.querySelectorAll('.picture');
let fullPictureImg = document.querySelector('.big-picture__img img');

pictures.forEach((picture)=>{
    let pictureImg = picture.querySelector('.picture__img');
    
    picture.addEventListener('click', (evt) => {
        evt.preventDefault();
        fullPicturePreview.classList.remove('hidden');
        fullPictureImg.src = pictureImg.src;
    });

    document.addEventListener('keydown', (evt) => {
        if (isEscCode(evt)) {
            evt.preventDefault();
            fullPicturePreview.classList.add('hidden');
        };
    });
});

fullPictureCloseButton.addEventListener('click', () => {
    fullPicturePreview.classList.add('hidden');
})