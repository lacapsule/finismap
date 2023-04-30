const villes = document.querySelectorAll('.commune');
let nom = document.querySelector('h5');
let s = document.querySelector('.solo');
let communeSelectionnee = null;
let offset = {x: 0, y: 0};

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

    var elementWidth = s.offsetWidth;
    var elementHeight = s.offsetHeight;
    var maxX = window.innerWidth - elementWidth;
    var maxY = window.innerHeight - elementHeight;
    x = Math.min(Math.max(x, 0), maxX);
    y = Math.min(Math.max(y, 0), maxY);

    s.style.left = x + 'px';
    s.style.top = y + 'px';
    s.style.zIndex = '5';
    nom.innerHTML = ville.dataset.name;

    s.addEventListener('mousedown', function(e) {
      offset = {
        x: s.offsetLeft - e.clientX,
        y: s.offsetTop - e.clientY
      };
      document.addEventListener('mousemove', onMouseMove);
    });

    document.addEventListener('mouseup', function() {
      document.removeEventListener('mousemove', onMouseMove);
    });

    function onMouseMove(e) {
      var x = e.clientX + offset.x;
      var y = e.clientY + offset.y;

      var maxX = window.innerWidth - s.offsetWidth;
      var maxY = window.innerHeight - s.offsetHeight;
      x = Math.min(Math.max(x, 0), maxX);
      y = Math.min(Math.max(y, 0), maxY);

      s.style.left = x + 'px';
      s.style.top = y + 'px';
    }
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


