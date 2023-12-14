const elements = Array.from(document.querySelectorAll('.info'));

function select(element) {
    deselect();
    element.classList.add('selected');
    element.parentNode.prepend(element);
}

document.addEventListener('click', function(event) {
    if(!event.target.classList.contains('info') && !event.target.parentNode.classList.contains('info')) {
        deselect();
    }
});

function deselect() {
    elements.forEach(e => {
        e.classList.remove('selected');
        e.parentNode.appendChild(e);
    });
};