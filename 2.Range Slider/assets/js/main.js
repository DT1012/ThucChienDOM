const $ = document.querySelector.bind(document);
const body = $('body');
const range = $('.range');
const rangeBar = $('.range-bar');

function setRangeBar(percent) {
    rangeBar.style.width = `${percent}%`;
    $('span').innerText = `${percent}%`;
    body.style.backgroundColor = `rgba(0,0,0,${percent / 100})`;
}
setRangeBar(100)

range.addEventListener('mousemove', function(e) {
    const process = e.pageX - this.offsetLeft
    let percent = (process / this.offsetWidth) * 100
    percent = Math.ceil(percent)
    setRangeBar(percent)
})