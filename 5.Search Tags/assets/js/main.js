const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const ul = $('ul');
const input = $('input')

let tags = ['nodejs', 'reactjs'];
createTag()

function createTag() {
    ul.innerHTML = '';
    tags.forEach((tag, index) => {
        let liTag = `
        <li>${tag}    
        <i class="uit uit-multiply" onclick="removeTag(this, '${index}')"></i>
        </li>
        `;
        ul.innerHTML += liTag;
    });
    ul.appendChild(input);
    input.focus();
}

function removeTag(element, index) {
    tags.splice(index, 1);
    element.parentElement.remove();
    input.focus();
}

input.addEventListener('keyup', function(e) {
    if (e.key == "Enter") {
        let tag = e.target.value.trim();
        if (tag != '' && !tags.includes(tag)) {
            tags.push(tag);
            createTag();
        }
        e.target.value = '';
    }
})
const removeBtn = $('.btn-removeAll');
removeBtn.addEventListener('click', function() {
    tags.length = 0;
    createTag();
})