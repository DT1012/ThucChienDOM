const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const images = $$('.wrapper .image img')
const gallery = $('.gallery')
const galleryImg = $('.gallery-inner img')
const close = $('.gallery .close ')

const next = $('.control.next')
const prev = $('.control.prev')

let currentIndex = 0;
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        showGallery()
    })

});

function showGallery() {
    currentIndex == images.length - 1 ? next.classList.add('hide') : next.classList.remove('hide')

    currentIndex == 0 ? prev.classList.add('hide') : prev.classList.remove('hide')

    gallery.classList.add('show');
    galleryImg.src = images[currentIndex].src
}

next.addEventListener('click', () => {
    currentIndex != images.length - 1 ? currentIndex++ : undefined;
    showGallery()
})
prev.addEventListener('click', () => {
    currentIndex != 0 ? currentIndex-- : undefined;
    showGallery()
})
close.addEventListener('click', () => {
    gallery.classList.remove('show')
})