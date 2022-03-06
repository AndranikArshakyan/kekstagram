import { drawPhotos, photos } from "./draw-photos.js";
import { isEscCode, removeClass, addClass} from "./util.js";
drawPhotos();

let fullPicturePreview = document.querySelector('.big-picture');
let fullPictureCloseButton = fullPicturePreview.querySelector('.big-picture__cancel');
let fullPictureImg = document.querySelector('.big-picture__img img');
let fullPictureLikesCount = document.querySelector('.likes-count');
let fullPictureCommentsCount = document.querySelector('.comments-count');
let fullPictureDescription = document.querySelector('.social__caption');
let pictures = document.querySelectorAll('.picture');
let socialComments = document.querySelector('.social__comments');
let socialComment = document.querySelector('.social__comment');
let socialCommentsCount = document.querySelector('.social__comment-count');
let commentsLoader = document.querySelector('.comments-loader');
let body = document.querySelector('body');
socialComments.innerHTML = '';

let renderComments = (photo) =>{
    photo.comments.forEach((comment)=>{
        let socialCommentClone = socialComment.cloneNode(true);
        let socialCommentImg = socialCommentClone.querySelector('.social__comment img');
        let socialText = socialCommentClone.querySelector('.social__text');
        socialCommentImg.src = comment.avatar;
        socialCommentImg.alt = comment.name;
        socialText.textContent = comment.message;
        socialComments.appendChild(socialCommentClone);
    });
};
let showFullImage = (photos) => {
    for (let i = 0; i < photos.length; i++) {
        let currentPicture = pictures[i];
        let currentPhoto = photos[i];

        currentPicture.addEventListener('click', (evt) => {
            evt.preventDefault();
            removeClass(fullPicturePreview, 'hidden');
            addClass(commentsLoader, 'hidden');
            addClass(socialCommentsCount, 'hidden');
            addClass(body, 'modal-open');
            

            fullPictureImg.src = currentPhoto.url;
            fullPictureLikesCount.textContent = currentPhoto.likes;
            fullPictureCommentsCount.textContent = currentPhoto.comments.length;
            fullPictureDescription.textContent  = currentPhoto.description;            
            renderComments(currentPhoto);
        });   
    };
};

document.addEventListener('keydown', (evt) => {
    if (isEscCode(evt)) {
        evt.preventDefault();
        addClass(fullPicturePreview, 'hidden');
        removeClass(body, 'modal-open');
        socialComments.innerHTML = '';
    };
});   

fullPictureCloseButton.addEventListener('click', () => {
    addClass(fullPicturePreview, 'hidden');
    removeClass(body, 'modal-open');
    socialComments.innerHTML = '';

});
export {showFullImage};