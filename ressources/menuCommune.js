const villes = document.querySelectorAll('.commune');
const body = document.querySelector('body');
let name = document.querySelector('h5');
let info = document.querySelector('.infos');


villes.forEach(ville => {
    ville.addEventListener('contextmenu', function (e) {
        e.preventDefault();
       var x = e.clientX + window.pageXOffset + -800;
       var y = e.clientY + window.pageYOffset + 75;
       ville.style.fill = couleurCommune.value;
       console.log('La souris est positionné en : x=' + x + ' y=' + y);

       info.classList.toggle('show');
       info.style.left = x + 'px';
       info.style.top = y + 'px';
       name.innerHTML = ville.dataset.name;

    });
});

villes.addEventListener('click', function (e) {
    
    if(!e.target.classList.contains('infos')){
    
    if(info.classList.contains('show')) {
        info.classList.remove('show');
        console.log(e.target);
    }
}
});
