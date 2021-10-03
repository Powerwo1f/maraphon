const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
let time = 0;
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
let score = 0;
const colors = ['#FFE9AC', '#B7E9FF', "#FF24CD", "#FF5F91", "#FFAF55", "#E972FF", "#B7E9FF", "#FF7DC2" ];


startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    screens[0].classList.add('up')
});

timeList.addEventListener('click', (event) => {
    if(event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'));
        screens[1].classList.add('up');
        startGame()
    }
});

board.addEventListener('click', (event) => {
    if(event.target.classList.contains('circle')) {
        score++;
        event.target.remove();
        createRandomCircle()
    }
});

function startGame() {
    setInterval(decreaseTime, 1000);
    createRandomCircle();
    setTime(time);
}

function decreaseTime() {
    if(time === 0) {
        finishGame()
    } else {
        let current = --time;
        if(current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}

function finishGame() {
    timeEl.parentNode.classList.add('hide');
    board.innerHTML = `<h2>Your Score: <span class="primary">${score}</span></h2>`
}

function createRandomCircle() {
    const circle = document.createElement('div');
    const size = getRandomSize(20, 65);

    const {width, height} = board.getBoundingClientRect();
    const x = getRandomSize(0, width - size);
    const y = getRandomSize(0, height - size);

    circle.classList.add('circle');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.background = colors[getRandomSize(0, colors.length - 1)];

    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;

    board.append(circle)
}

function getRandomSize(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

