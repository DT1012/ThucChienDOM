const input = document.querySelector('#input-img')

input.addEventListener('change', (e) => {
    let file = e.target.files[0];
    if (!file) return;

    let img = document.createElement('img');
    img.src = URL.createObjectURL(file);

    document.querySelector('.preview').appendChild(img);
})