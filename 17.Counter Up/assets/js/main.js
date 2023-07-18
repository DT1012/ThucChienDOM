const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const face = $('.face h2')
const youtube = $('.youtube h2')
const tiktok = $('.tiktok h2')

function counterUp(el, to) {
    let speed = 500;
    let from = 0;
    let step = to / speed;
    const counter = setInterval(function() {
        from += step;
        if (from > to) {
            clearInterval(counter);
            el.innerText = to;
        } else {
            el.innerText = Math.ceil(from)
        }
    }, 1)
}
counterUp(face, 4450)
counterUp(youtube, 1300)
counterUp(tiktok, 9900)