const demo = document.getElementById('content').innerHTML;

const tabs = document.getElementById('tabs').children;
const content = document.getElementById('content');

function select(element) {
    unselect();

    var id = element.id;

    element.classList.add('selected');

    if (id === 'demo'){
        content.innerHTML = demo;
        return;
    }

    var xhr = new XMLHttpRequest();
    xhr.open('GET', `/luanpozzobon_site/pages/projects/moonvs/templates/${id}.html`, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var parser = new DOMParser();
            var doc = parser.parseFromString(xhr.responseText, 'text/html');

            content.innerHTML = doc.getElementById('template').innerHTML;
        }
    };

    xhr.send();
}

function unselect() {
    Array.from(tabs).forEach(e => {
        e.classList.remove('selected');
    })
}