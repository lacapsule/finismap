//Déclaration des variables

//const
const svg = document.querySelector('svg')
const zoom = document.querySelector('#zoom')
const dezoom = document.querySelector('#dezoom')
const reset = document.querySelector('#reset')
const up = document.querySelector('#up')
const down = document.querySelector('#down')
const left = document.querySelector('#left')
const right = document.querySelector('#right')

//var

var zoomLevel = 1 // Niveau de zoom initial 
var offSetY = 0
var offSetX = 0


//EventListeners
zoom.addEventListener('click', () => {
    zoomInOut('in')
})
dezoom.addEventListener('click', () => {
    zoomInOut('out')
})
reset.addEventListener('click', () => {
    resetMap();
})
up.addEventListener('click', () => {
    move('down')
})
down.addEventListener('click', () => {
    move('up')
})
left.addEventListener('click', () => {
    move('right')
})
right.addEventListener('click', () => {
    move('left')
})



//Functions


function zoomInOut(zoomType){
    if(zoomType === 'in'){
        zoomLevel += 0.1
    } else if(zoomType === 'out') {
        if(zoomLevel > 1){
            zoomLevel -= 0.1

            zoomLevel = Math.max(zoomLevel, 0.1)
        }
    }


    for(var i = 0; i < svg.children.length; i++){
        svg.children[i].style.transform = `scale(${zoomLevel})`;
    }
}


function move(direction) {
    var moveAmount = 50
    switch(direction){
        case 'up':
            offSetY -= moveAmount
            break
        case 'down':
            offSetY += moveAmount
            break
        case 'left':
            offSetX -= moveAmount
            break
        case 'right':
            offSetX += moveAmount
            break
    }

    for(var i = 0; i<svg.children.length; i++){
        svg.children[i].style.transform = `scale(${zoomLevel}) translate(${offSetX}px, ${offSetY}px)`
    }
}

function resetMap(){
    zoomLevel = 1

    for(var i = 0; i < svg.children.length; i++){
        svg.children[i].style.transform = `scale(${zoomLevel})`
    }
}

document.addEventListener('touchmove', (event) => {
    event.preventDefault()
}, { passive: false })