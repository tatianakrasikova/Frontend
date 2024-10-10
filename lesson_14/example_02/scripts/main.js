const submitButtonElement = document.querySelector('.submit-button');

const submitButtonHandler = (evt) => {
    evt.preventDefault();
    console.log(evt.target);
}

submitButtonElement.addEventListener('click', submitButtonHandler);
