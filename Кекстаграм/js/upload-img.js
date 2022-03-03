import { removeClass, addClass, isEscCode } from "./util.js";
import { changeImgSize, imgPreview } from "./change-img-size.js";
let uploadFile = document.querySelector('#upload-file');
let imgOverlay = document.querySelector('.img-upload__overlay');
let body = document.querySelector('body');
let imgOverlayClose = document.querySelector('#upload-cancel');

let uploadImg = () =>{

    changeImgSize();
    
    uploadFile.addEventListener('change', ()=>{
        addClass(body, 'modal-open')
        removeClass(imgOverlay, 'hidden');
    });

    imgOverlayClose.addEventListener('click', ()=>{
        removeClass(body, 'modal-open');
        addClass(imgOverlay, 'hidden');
        uploadFile.value = '';
        imgPreview.style.transform = ``;
    });

    document.addEventListener('keydown', (evt) => {
        if (isEscCode(evt)) {
            evt.preventDefault();
            removeClass(body, 'modal-open');
            addClass(imgOverlay, 'hidden');
            uploadFile.value = '';
            imgPreview.style.transform = ``;
        };
    });   

};
export {uploadImg, uploadFile};