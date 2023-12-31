const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const form = $('form');
const username = $('#username');
const email = $('#email')
const password = $('#password');
const password2 = $('#password2')

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    const small = formControl.querySelector('small');
    small.innerText = '';
}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(input.value.trim())) {
        showSuccess(input)
    } else {
        showError(input, 'Email is not valid')
    }
}

function checkRequired(inputArr) {
    let isRequired = false;
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`)
            isRequired = true
        } else {
            showSuccess(input)
        }
    });
    return isRequired;
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`)
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`)

    } else {
        showSuccess(input)
    }
}

function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!checkRequired([username, email, password, password2])) {
        checkEmail(email);
        checkLength(password, 6, 25)
        checkLength(username, 3, 15)
        checkPasswordMatch(password, password2)
    }
})