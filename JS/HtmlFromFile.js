const elements = document.querySelectorAll('[data-html_from]');
elements.forEach(function (el) {
    const filePath = 'Texts/' + el.dataset.html_from + '.txt';
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            let placeTo = 'afterbegin';
            switch (el.dataset.htmt_to) {
                case 'afterbegin':
                    placeTo = 'afterbegin';
                    break;
                case 'beforeend':
                    placeTo = 'beforeend';
                    break;
                case 'afterend':
                    placeTo = 'afterend';
                    break;
            }
            el.insertAdjacentHTML(placeTo, data);
        })
});