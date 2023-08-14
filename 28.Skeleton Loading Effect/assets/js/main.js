const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const cardImg = $('.card__img')
const cardHeading = $('.card__info h2')
const cardContent = $('.card__info p')
const cardBtn = $('.card__info button')

setTimeout(() => {
    cardImg.innerHTML =
        '<img src="https://images.unsplash.com/photo-1637420425895-97a239041d53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1148&q=80" alt>'
    cardHeading.innerHTML = 'Heading'
    cardContent.innerHTML =
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut soluta qui repudiandae, maxime optio voluptatem eius eveniet officiis'
    cardBtn.innerHTML = 'Read More';

    document.querySelectorAll('.loading').forEach((item) => {
        item.classList.remove('loading')
    })
}, 5000);