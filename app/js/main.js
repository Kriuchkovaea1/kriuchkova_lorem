const menuBtn = document.querySelector('.burger');
const menuMobile = document.querySelector('.menu');
const body = document.querySelector('body');

menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('open');
    body.classList.toggle('lock');
});


const cg = document.querySelector('.content__inner');

const style = document.createElement('style');
document.head.appendChild(style);


const hideHalfEmptyColumns = function () {
    const columns = Math.round(cg.offsetWidth / 160);
    const elements = cg.childElementCount;
    const elementsToShow = columns * Math.floor(elements / columns);
    style.innerHTML = `
            .content__inner>div:nth-child(n + ${elementsToShow + 1}) {
                display: none;
            }`;
}
hideHalfEmptyColumns();
window.addEventListener('resize', function (event) {
    hideHalfEmptyColumns();
});