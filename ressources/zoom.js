//Déclaration des variables

//const
const svg = document.querySelector('svg')
const zoom = document.querySelector('#zoom')
const dezoom = document.querySelector('#dezoom')
const reset = document.querySelector('#reset')


//var

var zoomLevel = 1 // Niveau de zoom initial 



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

function resetMap(){
    zoomLevel = 1

    for(var i = 0; i < svg.children.length; i++){
        svg.children[i].style.transform = `scale(${zoomLevel})`
    }
}