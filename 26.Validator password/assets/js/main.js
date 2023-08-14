const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const form = $('form')
const input = $('form input')
const eye = $('.form-eye')
eye.addEventListener('click', (e) => {
    e.target.classList.toggle('show');

    input.type == 'password' ? (input.type = 'text') : (input.type = 'password');
})
input.addEventListener('input', (e) => {
    const value = e.target.value

    const lowercase = $('.lowercase').classList;
    const uppercase = $('.uppercase').classList;
    const number = $('.number').classList;
    const symbol = $('.symbol').classList;
    const characters = $('.characters').classList;

    value.search(/[a-z]/) >= 0 ? lowercase.add('valid') : lowercase.remove('valid');
    value.search(/[A-Z]/) >= 0 ? uppercase.add('valid') : uppercase.remove('valid');
    value.search(/[0-9]/) >= 0 ? number.add('valid') : number.remove('valid');
    value.search(/[\W]/) >= 0 ? symbol.add('valid') : symbol.remove('valid');
    value.length >= 8 ? characters.add('valid') : characters.remove('valid');
})