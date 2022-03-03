import { photos } from "./draw-photos.js";
import { showFullImage } from "./show-full-image.js";
import { uploadImg, uploadFile } from "./upload-img.js";
import { addClass, removeClass } from "./util.js";
let imgPreview = document.querySelector('.img-upload__preview img');

showFullImage(photos);

uploadFile.addEventListener('click', uploadImg);

let slider = document.querySelector('.effect-level__slider');
let effectItems = document.querySelectorAll('.effects__item');
let effectValue = document.querySelector('.effect-level__value');
let effectClasses = [
    '',
    'effects__preview--chrome', 
    'effects__preview--sepia',
    'effects__preview--marvin',
    'effects__preview--phobos',
    'effects__preview--heat'
];
addClass(slider, 'hidden');

noUiSlider.create(slider, {
    range: {
        min: 0,
        max: 1,
    },
    start: 0,
    step: 0.1
});

for (let i = 0; i < effectClasses.length; i++) {
    effectItems[i].addEventListener('click', () =>{
        imgPreview.style = '';
        imgPreview.className = effectClasses[i];
        if (i == 0){
            addClass(slider, 'hidden');
        } else {
            removeClass(slider, 'hidden');
        };
    });
};


slider.noUiSlider.on('update', (values, handle) => {
    effectValue.value = values[handle];
    if (imgPreview.className === effectClasses[0]){
        imgPreview.style = '';
    } else if (imgPreview.className === effectClasses[1]) {
        imgPreview.style.filter = `grayscale(${effectValue.value})`;
    } else if (imgPreview.className === effectClasses[2]) {
        imgPreview.style.filter = `sepia(${effectValue.value})`;
    } else if (imgPreview.className === effectClasses[3]) {
        imgPreview.style.filter = `invert(${effectValue.value * 100}%)`;
    } else if (imgPreview.className === effectClasses[4]) {
        imgPreview.style.filter = `blur(${effectValue.value * 3}px)`;
    } else if (imgPreview.className === effectClasses[5]) {
        imgPreview.style.filter = `brightness(${effectValue.value * 3})`;
    }  
});




   

