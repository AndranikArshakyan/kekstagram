import { isEscCode } from "./util.js";
let decreaseImgSize = document.querySelector('.scale__control--smaller');
let increaseImgSize = document.querySelector('.scale__control--bigger');
let imgSizeValue = document.querySelector('.scale__control--value');
let imgPreview = document.querySelector('.img-upload__preview img');


let changeImgSize = () =>{
    const SIZE_STEP = 25;
    
    decreaseImgSize.addEventListener('click', ()=>{
        let currentSize = parseInt(imgSizeValue.value, 10) - SIZE_STEP ;
        if (currentSize <= 25) {
            currentSize = 25;
        }
        imgSizeValue.value = currentSize + '%';
        imgPreview.style.transform = `scale(${currentSize / 100})`;

    });
    
    increaseImgSize.addEventListener('click', ()=>{
        let currentSize = parseInt(imgSizeValue.value, 10) + SIZE_STEP ;
        if (currentSize >= 100) {
            currentSize = 100;
        };

        imgSizeValue.value = currentSize + '%';
        imgPreview.style.transform = `scale(${currentSize / 100})`;

    });

};
export {changeImgSize, imgPreview, imgSizeValue };
