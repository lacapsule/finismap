const villes = document.querySelectorAll('.commune');
const body = document.querySelector('body');
let nom = document.querySelector('h5');
let info = document.querySelector('.infos');
let x = e.clientX + window.pageXOffset + -800;
let y = e.clientY + window.pageYOffset + 75;

villes.forEach(ville => {
    ville.addEventListener('contextmenu', function (e) {
        e.preventDefault();
       ville.style.fill = couleurCommune.value;
       console.log('La souris est positionné en : x=' + x + ' y=' + y);

       info.classList.toggle('show');
       info.style.left = x + 'px';
       info.style.top = y + 'px';
       nom.innerHTML = ville.dataset.name;        
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