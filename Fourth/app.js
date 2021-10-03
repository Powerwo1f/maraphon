const board = document.querySelector('#board')
const colors = ['#FFE9AC', '#B7E9FF', "#FF24CD", "#FF5F91", "#FFAF55", "#E972FF", "#B7E9FF", "#FF7DC2" ]
const SQUARE_NUMBERS = 500
for(let i = 0;i < SQUARE_NUMBERS; i++) {
    console.log(1)
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })

    board.append(square)
}

function setColor(square) {
    const color = getRandomColor()
    square.style.backgroundColor = color
    square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(square) {
    square.style.backgroundColor = "#1d1d1d"
    square.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}