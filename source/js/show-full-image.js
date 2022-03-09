import { isEscCode, removeClass, addClass} from "./util.js";


let fullPicturePreview = document.querySelector('.big-picture');
let fullPictureCloseButton = fullPicturePreview.querySelector('.big-picture__cancel');
let fullPictureImg = document.querySelector('.big-picture__img img');
let fullPictureLikesCount = document.querySelector('.likes-count');
let fullPictureCommentsCount = document.querySelector('.comments-count');
let fullPictureDescription = document.querySelector('.social__caption');
let socialComments = document.querySelector('.social__comments');
let socialComment = document.querySelector('.social__comment');
let socialCommentsCount = document.querySelector('.social__comment-count');
let commentsLoader = document.querySelector('.comments-loader');
let body = document.querySelector('body');
const COMMENTS_STEP = 5;
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
        let pictures = document.querySelectorAll('.picture');
        let currentPicture = pictures[i];
        let currentPhoto = photos[i];

        currentPicture.addEventListener('click', (evt) => {
            evt.preventDefault();
            removeClass(fullPicturePreview, 'hidden');
            addClass(body, 'modal-open');
            addClass(socialCommentsCount, 'hidden')
            fullPictureImg.src = currentPhoto.url;
            fullPictureLikesCount.textContent = currentPhoto.likes;
            fullPictureCommentsCount.textContent = currentPhoto.comments.length;
            fullPictureDescription.textContent  = currentPhoto.description; 
            renderComments(currentPhoto);
            
            for (let j = COMMENTS_STEP; j < currentPhoto.comments.length; j++) {
                let socialComment = document.querySelectorAll('.social__comment');
                addClass(socialComment[j], 'hidden');
            };
        }); 
    };
};
let j = 0;
let test = () =>{
    j+=COMMENTS_STEP;
    commentsLoader.addEventListener('click', ()=>{
        for (let i = j; i < j+5; i++) {
            console.log(i)
            let socialComment = document.querySelectorAll('.social__comment');
            removeClass(socialComment[i], 'hidden');
        };
        test()
    });
    
}
test()

document.addEventListener('keydown', (evt) => {
    if (isEscCode(evt)) {
        evt.preventDefault();
        addClass(fullPicturePreview, 'hidden');
        removeClass(body, 'modal-open');
        socialComments.innerHTML = '';
        j = 0;
    };
});   

fullPictureCloseButton.addEventListener('click', () => {
    addClass(fullPicturePreview, 'hidden');
    removeClass(body, 'modal-open');
    socialComments.innerHTML = '';
    j = 0;
});
export {showFullImage};