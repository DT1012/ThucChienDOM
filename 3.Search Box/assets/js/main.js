const btn = document.querySelector('.search-btn');
btn.addEventListener('click', function() {
    this.parentElement.classList.toggle('open');
    this.parentElementSibling.focus();
})