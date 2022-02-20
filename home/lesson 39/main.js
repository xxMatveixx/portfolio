let newBlock

let inputWidth = document.getElementById('width')
let inputHeight =document.getElementById('height')
let inputColor = document.getElementById('color')
let container = document.querySelector('.container')

let btnCreate = document.querySelector('.btn--create')
let btnClear = document.querySelector('.btn--clear')
let btnLeft = document.querySelector('.btn-left')
let btnRight = document.querySelector('.btn-right')
let btnTop = document.querySelector('.btn-top')


let toper
let lefty

btnCreate.addEventListener('click', () => {
    let iWidth = inputWidth.value
    let iHeight = inputHeight.value
    let iColor = inputColor.value

    toper = 0
    lefty = 0

    newBlock = document.createElement('div')
    newBlock.style.width = iWidth + 'px'
    newBlock.style.height = iHeight + 'px'
    newBlock.style.border = '2px solid red'
    newBlock.style.background = iColor
    container.prepend(newBlock);
})

btnClear.addEventListener('click', clear)

function clear () {
    newBlock.remove()
}

btnLeft.addEventListener('click', moveLeft)
btnRight.addEventListener('click', moveRight)
btnTop.addEventListener('click', moveTop)
btnDown.addEventListener('click', moveDown)

// function moveLeft(){
//     lefty -=50
//     newBlock.style.left=lefty + 'px'
//     newBlock.style.position = 'absolute'
// }
// function moveRight(){
//     lefty +=50
//     newBlock.style.right=lefty + 'px'
//     newBlock.style.position = 'absolute'
// }
// function moveTop(){
//     lefty -=50
//     newBlock.style.left=lefty + 'px'
//     newBlock.style.position = 'absolute'
// }
btnDown.addEventListener('click',()=>{
    newBlock.style.position = 'absolute'
    toper +=50
    newBlock.style.toper= toper - 'px'
} )
