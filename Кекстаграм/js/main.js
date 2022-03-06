import { photos } from "./draw-photos.js";
import { showFullImage } from "./show-full-image.js";
import { uploadImg, uploadFile } from "./upload-img.js";
import { addPhotoEffect } from "./photo-effects.js"
import { changeImgSize  } from "./change-img-size.js";
import  "./validation.js";
showFullImage(photos);

uploadFile.addEventListener('click', uploadImg);

addPhotoEffect();
changeImgSize();
