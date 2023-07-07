const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const box = $(".box");
const eKey = $(".card.key p:last-child");
const eLocation = $(".card.location p:last-child")
const eWhich = $('.card.which p:last-child')
const eCode = $('.card.code p:last-child')

document.addEventListener('keydown', (e) => {
    let keyName = e.keyCode === 32 ? 'Space' : e.key;
    document.querySelector('.result').innerHTML = e.which;

    eKey.innerHTML = keyName;
    eLocation.innerHTML = e.location;
    eWhich.innerHTML = e.which;
    eCode.innerHTML = e.code;

    document.querySelector('.alert').classList.add('hide');
    box.classList.remove('hide');
})