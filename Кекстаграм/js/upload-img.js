import { removeClass, addClass, isEscCode } from "./util.js";
import { changeImgSize, imgPreview, imgSizeValue} from "./change-img-size.js";
let uploadFile = document.querySelector('#upload-file');
let imgOverlay = document.querySelector('.img-upload__overlay');
let body = document.querySelector('body');
let imgOverlayClose = document.querySelector('#upload-cancel');
let sliderWrapper = document.querySelector('.img-upload__effect-level');

const SIZE_STEP = 25;

let uploadImg = () =>{

    let currentSize = parseInt(imgSizeValue.value, 10);
    uploadFile.addEventListener('change', ()=>{
        addClass(sliderWrapper, 'hidden');
        addClass(body, 'modal-open')
        removeClass(imgOverlay, 'hidden');
        imgPreview.className = '';
        imgPreview.style = '';        
    });

    imgOverlayClose.addEventListener('click', ()=>{
        removeClass(body, 'modal-open');
        addClass(imgOverlay, 'hidden');
        uploadFile.value = '';
        imgPreview.style.transform = '';
    });

    document.addEventListener('keydown', (evt) => {
        if ((isEscCode(evt) && evt.target.className != 'text__hashtags') && (isEscCode(evt) && evt.target.className != 'text__description')) {
            evt.preventDefault();
            removeClass(body, 'modal-open');
            addClass(imgOverlay, 'hidden');
            uploadFile.value = '';
            imgPreview.style.transform = '';
            imgSizeValue.value = '100%';
        };
    });   
    

};
export {uploadImg, uploadFile};