
const main = document.querySelector('main');
const errorTemplate = document.querySelector('#error').content;
const errorFragment = document.createDocumentFragment();
const body = document.querySelector('body');
const onAlertEscKeydown = (evt) => {
  if (evt.key === ('Escape' || 'Esc')) {
    removeAllert();
  }
}

const removeAllert = (type) => {
  document.querySelector(type).remove();
  document.removeEventListener('keydown', onAlertEscKeydown);
};


const showError = (text, button) => {
  const errorElement = errorTemplate.cloneNode(true);

  errorElement.querySelector('.error__title').textContent = text;
  errorElement.querySelector('.error__button').textContent = button;

  const errorButton = errorElement.querySelector('.error__button');

  document.addEventListener('click', function (evt) {
    let e = document.querySelector('.error__inner');
    if (!e.contains(evt.target)) {
      removeAllert('.error')
    }
  });

  errorButton.addEventListener('click', () => {
    removeAllert('.error');
  })

  document.addEventListener('keydown', onAlertEscKeydown);

  errorFragment.appendChild(errorElement);
  main.appendChild(errorFragment);
}

const successTemplate = document.querySelector('#success').content;
const successFragment = document.createDocumentFragment();

const showSuccess = (text) => {
  const successElement = successTemplate.cloneNode(true);
  const imgOverlay = document.querySelector('.img-upload__overlay');
  const uploadFile = document.querySelector('#upload-file');
  const imgSizeValue = document.querySelector('.scale__control--value');
  const imgPreview = document.querySelector('.img-upload__preview img');
  const commentField = document.querySelector('.text__description');
  const hashtagsField = document.querySelector('.text__hashtags');

  successElement.querySelector('.success__title').textContent = text;

  const successButton = successElement.querySelector('.success__button');

  document.addEventListener('click', function (evt) {
    let e = document.querySelector('.success__inner');
    if (!e.contains(evt.target)) {
      removeAllert('.success')
    }
  });

  successButton.addEventListener('click', () => {
    removeAllert('.success');
  })

  document.addEventListener('keydown', onAlertEscKeydown);
  imgOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadFile.value = commentField.value = hashtagsField.value = '';
  imgPreview.style.transform = '';
  imgSizeValue.value = '100%';
  successFragment.appendChild(successElement);
  main.appendChild(successFragment);
  
}

export { showError, showSuccess };
