import { stringCount } from "./util.js";
const MAX_HASHTAGS_COUNT = 5;
const MAX_EQUAL_HASHTAGS_COUNT = 1;
const MAX_HASHTAG_LENGTH = 20;
const MIN_HASHTAG_LENGTH = 2;

let commentField = document.querySelector('.text__description');
let hashtagsField = document.querySelector('.text__hashtags');
commentField.addEventListener('input', () => {
    let commentText = commentField.value;
    commentField.setCustomValidity('');
    if (!stringCount(commentText, 140)) {
        commentField.setCustomValidity('Максимальная длина комментария - 140 символов.');
    }
    commentField.reportValidity();
});

hashtagsField.addEventListener('input', () => {
    let hashtagsText = hashtagsField.value.toLowerCase();
    let hashtags = hashtagsText.split(' ');
    hashtagsField.setCustomValidity('');
    for (let i = 0; i < hashtags.length; i++) {
        let currentHashtag = hashtags[i];
        
        if (!stringCount(currentHashtag, MAX_HASHTAG_LENGTH)) {
            hashtagsField.setCustomValidity('Максимальная длина хештэга - 20 символов.');
        };
        if (hashtags.length > MAX_HASHTAGS_COUNT) {
            hashtagsField.setCustomValidity('Максимальное количество хэштегов - 5');
        };
        if (hashtags.filter((x)=>{return x==currentHashtag}).length > MAX_EQUAL_HASHTAGS_COUNT) {
            hashtagsField.setCustomValidity('Не должно быть двух одинаковых хэштегов');
        };
        if (stringCount(currentHashtag, MIN_HASHTAG_LENGTH)) {
            hashtagsField.setCustomValidity('Хэштег не может состоять только из одного символа');
        };
        if (currentHashtag[0] != '#') {
            hashtagsField.setCustomValidity('Хэштег должен начинаться с #');
        };
        if (!currentHashtag.slice(1).match(/[A-Za-zА-Яа-я0-9]+/)) {
            hashtagsField.setCustomValidity('Спецсимволы в хэштеге запрещены');
        };
    };
    hashtagsField.reportValidity();
});    



