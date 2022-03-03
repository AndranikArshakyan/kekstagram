
let decreaseImgSize = document.querySelector('.scale__control--smaller');
let increaseImgSize = document.querySelector('.scale__control--bigger');
let imgSizeValue = document.querySelector('.scale__control--value');
let imgPreview = document.querySelector('.img-upload__preview img');


let changeImgSize = () =>{
    const SIZE_STEP = 25;
    const DEFAULT_SIZE = 100;
    let tempSize = DEFAULT_SIZE;
    
    decreaseImgSize.addEventListener('click', ()=>{
        let currentSize = tempSize - SIZE_STEP;
        tempSize = currentSize;
        imgSizeValue.value = currentSize + '%';
        imgPreview.style.transform = `scale(${currentSize/100})`;
        if (currentSize === 25) {
            decreaseImgSize.disabled = true; 
        };
        increaseImgSize.disabled = false;
    });
    
    increaseImgSize.addEventListener('click', ()=>{
        let currentSize = tempSize + SIZE_STEP;
        tempSize = currentSize;
        imgSizeValue.value = currentSize + '%';
        imgPreview.style.transform = `scale(${currentSize/100})`;
        if (currentSize === 100) {
            increaseImgSize.disabled = true; 
        };
        decreaseImgSize.disabled = false;
        

    });
};
export {changeImgSize, imgPreview};
