import { shuffle, removeClass, addClass, sort } from "./util.js";
import { createFetch } from "./create-fetch.js";
import { drawPhotos } from "./draw-photos.js";
import { showFullImage } from "./show-full-image.js";

const COUNT_RANDOM_PHOTOS = 10;
let randomImg = document.querySelector('#filter-random');
let defaultImg = document.querySelector('#filter-default');
let discussedImg = document.querySelector('#filter-discussed');

let removePhotos = () =>{
    let pictures = document.querySelectorAll('.picture');
    pictures.forEach((picture) => picture.remove());
};

randomImg.addEventListener('click', () => {
    addClass(randomImg, 'img-filters__button--active');
    removeClass(defaultImg, 'img-filters__button--active');
    removeClass(discussedImg, 'img-filters__button--active');

    removePhotos();
    let randomPhotos = createFetch(
        (photos) => {
        let randPhotos = shuffle(photos).slice(0, COUNT_RANDOM_PHOTOS);
        drawPhotos(randPhotos);
        showFullImage(randPhotos);
        },
        (err) => {
        showError('Ошибка загрузки, попробуйте еще раз', 'Закрыть')
    });
    randomPhotos();
});

defaultImg.addEventListener('click', () => {
    addClass(defaultImg, 'img-filters__button--active');
    removeClass(discussedImg, 'img-filters__button--active');
    removeClass(randomImg, 'img-filters__button--active');
    removePhotos();

    let defaultPhotos = createFetch(
        (photos) => {
            drawPhotos(photos);
            showFullImage(photos);
        },
        (err) => {
          showError('Ошибка загрузки, попробуйте еще раз', 'Закрыть')
    });
    defaultPhotos();
});

discussedImg.addEventListener('click', () => {
    addClass(discussedImg, 'img-filters__button--active');
    removeClass(defaultImg, 'img-filters__button--active');
    removeClass(randomImg, 'img-filters__button--active');
    removePhotos();

    let defaultPhotos = createFetch(
        (photos) => {
            let discussedPhotos = sort(photos);
            drawPhotos(discussedPhotos);
            showFullImage(discussedPhotos);   
        },
        (err) => {
          showError('Ошибка загрузки, попробуйте еще раз', 'Закрыть')
    });
    defaultPhotos();
   

});