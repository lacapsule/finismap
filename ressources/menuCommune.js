const villes = document.querySelectorAll('.commune');
let nom = document.querySelector('h5');
let s = document.querySelector('.solo');
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
        s.classList.add('show');
        s.style.left = x + 'px';
        s.style.top = y + 'px';
        s.style.zIndex = '5';
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
    if (!s.contains(e.target) && s.classList.contains('show')) {
      s.classList.remove('show');
    }
  });