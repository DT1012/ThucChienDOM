const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const listImaage = $$('.list-img div')
const next = $('.next')
const prev = $('.prev')
const imgWarp = $('.img-wrap img')

let currentIndex = 0;
setCurrent(currentIndex);

function setCurrent(index) {
    currentIndex = index;
    imgWarp.src = listImaage[currentIndex].querySelector('img').src;

    listImaage.forEach((item) => {
        item.classList.remove('active');
    });

    listImaage[currentIndex].classList.add('active')
}

listImaage.forEach((img, index) => {
    img.addEventListener("click", (e) => {
        setCurrent(index)
    })
})
next.addEventListener('click', () => {
    if (currentIndex == listImaage.length - 1) {
        currentIndex = 0
    } else currentIndex++

        setCurrent(currentIndex)
})

prev.addEventListener('click', () => {
    if (currentIndex == 0) currentIndex = listImaage.length - 1
    else currentIndex--

        setCurrent(currentIndex)
})