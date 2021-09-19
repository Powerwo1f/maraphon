const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');

const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slides = mainSlide.querySelectorAll('div');

console.log(mainSlide)
const container = document.querySelector('.container');
const height = container.clientHeight;

sidebar.style.top = `-${(slides.length - 1) * 100}vh`;

upBtn.addEventListener('click', () => {changeSlide('up')});
downBtn.addEventListener('click', () => {changeSlide('down')});

let activeSlideIndex = 0;

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++;
        if( activeSlideIndex === slides.length) {
            activeSlideIndex = 0;
        }
    }else if (direction === 'down') {
        activeSlideIndex--;
        if( activeSlideIndex < 0) {
            activeSlideIndex = slides.length - 1;
        }
    }
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}



