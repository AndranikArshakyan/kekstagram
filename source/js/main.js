import { drawPhotos} from "./draw-photos.js";
import { showFullImage } from "./show-full-image.js";
import { uploadImg, uploadFile } from "./upload-img.js";
import { addPhotoEffect } from "./photo-effects.js"
import { changeImgSize  } from "./change-img-size.js";
import { createFetch } from "./create-fetch.js";
import { showError, showSuccess } from './alerts.js';
import { removeClass} from "./util.js";
import  "./validation.js";
import "./sorts.js"
let form = document.querySelector('.img-upload__form');
let imgFilters = document.querySelector('.img-filters');

uploadFile.addEventListener('click', uploadImg);

addPhotoEffect();
changeImgSize();


let fetchPhotos = createFetch(
    (photos) => {
        drawPhotos(photos);
        showFullImage(photos);
        removeClass(imgFilters, 'img-filters--inactive');
        
    },
    (err) => {
      showError('Ошибка загрузки, попробуйте еще раз', 'Закрыть')
});
fetchPhotos();

form.addEventListener('submit', (evt)=>{
    evt.preventDefault();
    let formData = new FormData(evt.target);
    
    fetch(
        'https://22.javascript.pages.academy/kekstagram',
        {
          method: 'POST',
          body: formData,
        },
      );
      showSuccess('Ура!');
});


