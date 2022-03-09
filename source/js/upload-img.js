import { removeClass, addClass, isEscCode } from "./util.js";
import { changeImgSize, imgPreview, imgSizeValue} from "./change-img-size.js";
let uploadFile = document.querySelector('#upload-file');
let imgOverlay = document.querySelector('.img-upload__overlay');
let body = document.querySelector('body');
let imgOverlayClose = document.querySelector('#upload-cancel');
let sliderWrapper = document.querySelector('.img-upload__effect-level');

const SIZE_STEP = 25;
const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
let showChoosenImg = () =>{
    let file = uploadFile.files[0];
    let fileName = file.name.toLowerCase();

    let matches = FILE_TYPES.some((it) => {
        return fileName.endsWith(it);
    });
    
    if (matches) {
        let reader = new FileReader();
        reader.addEventListener('load', () => {
        imgPreview.src = reader.result;
        });
    
        reader.readAsDataURL(file);
    };
};
let resetSettings = () =>{
    removeClass(body, 'modal-open');
    addClass(imgOverlay, 'hidden');
    uploadFile.value = '';
    imgPreview.style.transform = '';
    imgSizeValue.value = '100%';
    imgPreview.src = ' ';
};
let uploadImg = () =>{
    uploadFile.addEventListener('change', ()=>{
        showChoosenImg();
        addClass(sliderWrapper, 'hidden');
        addClass(body, 'modal-open');
        removeClass(imgOverlay, 'hidden');
        imgPreview.className = '';
        imgPreview.style = '';        
    });

    imgOverlayClose.addEventListener('click', ()=>{
        resetSettings();
    });

    document.addEventListener('keydown', (evt) => {
        if ((isEscCode(evt) && evt.target.className != 'text__hashtags') && (isEscCode(evt) && evt.target.className != 'text__description')) {
            evt.preventDefault();
            resetSettings();
        };
    });   
    

};
export {uploadImg, uploadFile};