const villes = document.querySelectorAll('.commune');
let nom = document.querySelector('h5');
let info = document.querySelector('.infos');
let communeSelectionnee = null;


villes.forEach(ville => {
    ville.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        var x = e.clientX + window.pageXOffset + -200;
        var y = e.clientY + window.pageYOffset + 75;
        ville.style.fill = couleurCommune.value;
        console.log('La souris est positionné en : x=' + x + ' y=' + y);

        communeSelectionnee = ville;
        info.classList.add('show');
        info.style.left = x + 'px';
        info.style.top = y + 'px';
        nom.innerHTML = ville.dataset.name;
    });
});

couleurCommune.addEventListener("input", () => {
    if (communeSelectionnee !== null) {
        communeSelectionnee.style.fill = couleurCommune.value;
    }
});
couleurFrontiere.addEventListener("input", () => {
    if (communeSelectionnee !== null) {
        communeSelectionnee.style.stroke = couleurFrontiere.value;
    }
});

document.addEventListener('click', function(e) {
    if (!info.contains(e.target) && info.classList.contains('show')) {
      info.classList.remove('show');
    }
  });