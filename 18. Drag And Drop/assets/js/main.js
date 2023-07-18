const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const draggable = $('.draggable')
const boxes = $$('.box')

draggable.addEventListener('dragstart', dragStart)
draggable.addEventListener('dragend', dragEnd)

boxes.forEach((box) => {
    box.addEventListener('dragover', dragOver)
    box.addEventListener('drop', dragDrop)
});

function dragOver(e) {
    e.preventDefault()
    this.appendChild(draggable)
}

function dragStart() {
    this.classList.add('dragging')
}

function dragEnd() {
    this.classList.remove('dragging')
}

function dragDrop() {
    this.appendChild(draggable)
}