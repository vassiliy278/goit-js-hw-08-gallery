import {images} from "./gallery-items.js";

let gallery = document.querySelector('.gallery');
let lightbox = document.querySelector('.lightbox');
let lightboxImage = document.querySelector('.lightbox__image');
let closeModal = document.querySelector('button[data-action="close-lightbox"]');

images.forEach(a => {
    let galleryListItem = document.createElement('li');
    gallery.appendChild(galleryListItem);
    const galleryImage = document.createElement('img');
    galleryImage.setAttribute('data-src', a.original)
    galleryImage.setAttribute('src', a.preview);
    galleryImage.setAttribute('title', a.description);
    galleryListItem.appendChild(galleryImage);
    
    galleryListItem.classList.add('gallery__item');
    galleryImage.classList.add('gallery__image', 'gallery__link');

    const galleryLink = document.createElement('a');
    galleryListItem.appendChild(galleryLink);
    galleryLink.classList.add('gallery__link');
    galleryLink.setAttribute('href', a.original)
});
//Развертывание по клику
function handleClick(e) {
    if (e.target === gallery) {return}
    lightbox.classList.add('is-open');
    // console.log(e.target)
    // console.log(e.target.dataset.src);
    lightboxImage.setAttribute('src', e.target.dataset.src);
    // console.log(e.target.nextSibling)
}
gallery.addEventListener('click', handleClick)

// Закрытие модального окна при клике на кнопку
function buttonClick() {
    lightbox.classList.remove('is-open');
    lightboxImage.removeAttribute('src');
}
closeModal.addEventListener('click', buttonClick);

// Закрытие модального окна при клике на .lightbox__overlay

lightbox.addEventListener('click', buttonClick)


// Закрытие модального окна по нажатию клавиши ESC.
function escapePress (e) {
    if (e.key === 'Escape') {
        buttonClick()
    }
}
window.addEventListener('keyup', escapePress)
