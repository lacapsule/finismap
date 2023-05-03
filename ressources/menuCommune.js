const villes = document.querySelectorAll('.commune');
let s = document.querySelector('.solo');
let nom = document.querySelector('h5');
const infosBtn = document.querySelector('#infos');
let communeSelectionnee = null;
let offset = { x: 0, y: 0 };

villes.forEach(ville => {
  ville.addEventListener('click', (e) => {
    e.stopPropagation();
    e.preventDefault();
    var x = e.clientX + window.pageXOffset + -200;
    var y = e.clientY + window.pageYOffset + 50;
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
    s.style.zIndex = '10';
    nom.innerHTML = ville.dataset.name;
    afficherInformationsVille();

    function afficherInformationsVille() {
      if (communeSelectionnee !== null) {
        fetch('./ressources/contacts.json')
          .then(response => response.json())
          .then(data => {
            const selectedCity = data.find(city => city.name === communeSelectionnee.dataset.name);
            const infoBox = document.querySelector('.infos');
            infoBox.innerHTML = 
            "<a href='" + selectedCity.website + "' target='_blank'>" + selectedCity.website + "</a>" +
            "<a href='mailto:" + selectedCity.email + "'>" + selectedCity.email + "</a>" +
            "<a href='tel:" + selectedCity.telephone + "'>" + selectedCity.telephone + "</a>";
          })
      }
    };
    

    s.addEventListener('mousedown', onMouseDown);
    s.addEventListener('touchstart', onTouchStart);
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

document.addEventListener('click', function (e) {
  if (!s.contains(e.target) && s.classList.contains('show')) {
    s.classList.remove('show');
  }
});

function onMouseDown(e) {
  offset = {
    x: s.offsetLeft - e.clientX,
    y: s.offsetTop - e.clientY
  };
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
}

function onTouchStart(e) {
  offset = {
    x: s.offsetLeft - e.touches[0].clientX,
    y: s.offsetTop - e.touches[0].clientY
  };
  document.addEventListener('touchmove', onTouchMove);
  document.addEventListener('touchend', onTouchEnd);
}

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

function onTouchMove(e) {
  var x = e.touches[0].clientX + offset.x;
  var y = e.touches[0].clientY + offset.y;

  var maxX = window.innerWidth - s.offsetWidth;
  var maxY = window.innerHeight - s.offsetHeight;
  x = Math.min(Math.max(x, 0), maxX);
  y = Math.min(Math.max(y, 0), maxY);

  s.style.left = x + 'px';
  s.style.top = y + 'px';
}

function onMouseUp() {
  document.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('mouseup', onMouseUp);
}

function onTouchEnd() {
  document.removeEventListener('touchmove', onTouchMove);
  document.removeEventListener('touchend', onTouchEnd);
}
