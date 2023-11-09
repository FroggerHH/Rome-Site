const infoBlockHolders = document.querySelectorAll('.info-block');
window.addEventListener('scroll', updateAllHover);
window.addEventListener('resize', updateAllHover);

infoBlockHolders.forEach(function (el) {
    const classToAdd = 'force-hover';
    el.addEventListener('mouseover', function () {
        if (el.classList.contains(classToAdd) === false) {
            el.classList.add(classToAdd);
        }

        updateAllHover();
    });
    el.addEventListener('mouseout', function () {
        el.classList.remove(classToAdd);
        updateAllHover();
    });
});

function ShouldHoverElement(el) {
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
    if (el.classList[0] !== 'info-block') el = el.closest('.info-block');

    if (el.classList.contains('force-hover')) return true;
    if (windowWidth < 750) {
        const rect = el.getBoundingClientRect();
        const elementTop = rect.top;
        const elementBottom = rect.bottom;

        const offset = 100;

        return (
            elementTop < windowHeight / 2 + offset &&
            elementBottom > windowHeight / 2 - offset
        );
    }
}

function updateAllHover() {
    updateElementsHover(document.querySelectorAll('.info-block'));
    updateElementsHover(document.querySelectorAll('.info-block-content'));
    updateElementsHover(document.querySelectorAll('.info-block-title'));
}

function updateElementsHover(elements) {
    elements.forEach(function (el) {
        const classToAdd = el.classList[0] + '-hover';
        if (ShouldHoverElement(el)) {
            if (el.classList.contains(classToAdd)) return;
            el.classList.add(classToAdd);
        } else el.classList.remove(classToAdd);
    });
}