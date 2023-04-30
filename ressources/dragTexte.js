let button = document.getElementById('texte');

button.addEventListener('click', function() {
  let div = document.createElement('div');
  div.setAttribute('class', 'draggable');
  div.setAttribute('contenteditable', 'true');
  div.setAttribute('spellcheck', 'false');

  let text = document.createTextNode('Cliquer pour déplacer et modifier le texte. Vous pouvez déplacer la boîte avec les flèches directionnelles de vos clavier. Attention ! L\'appui de la touche "suppr" va supprimer la boîte.');
  div.appendChild(text);

  div.setAttribute('style', 'left: 10px; top: 60px; margin-right: 10px;');

  let deleteButton = document.createElement('button');
  deleteButton.textContent = 'x';
  deleteButton.setAttribute('class', 'supprTexte');
  div.appendChild(deleteButton);
  deleteButton.addEventListener('click', function() {
    document.body.removeChild(div);
  });

  document.body.appendChild(div);

  div.addEventListener('keydown', function(event) {
    if (event.key === 'Delete') {
      document.body.removeChild(div);
    }});

  let dragging = false;
  let dragStartX, dragStartY;

  div.addEventListener('mousedown', function(event) {
    dragging = true;
    dragStartX = event.clientX;
    dragStartY = event.clientY;
  });

  div.addEventListener('mousemove', function(event) {
    if (dragging) {
      let deltaX = event.clientX - dragStartX;
      let deltaY = event.clientY - dragStartY;
      let left = parseInt(div.style.left) + deltaX;
      let top = parseInt(div.style.top) + deltaY;
      div.style.left = left + 'px';
      div.style.top = top + 'px';
      dragStartX = event.clientX;
      dragStartY = event.clientY;
    }
  });

  div.addEventListener('mouseup', function(event) {
    dragging = false;
  });

  document.addEventListener('keydown', function(event) {
    if (event.keyCode === 37) { 
      div.style.left = parseInt(div.style.left) - 10 + 'px';
    } else if (event.keyCode === 38) { 
      div.style.top = parseInt(div.style.top) - 10 + 'px';
    } else if (event.keyCode === 39) { 
      div.style.left = parseInt(div.style.left) + 10 + 'px';
    } else if (event.keyCode === 40) { 
      div.style.top = parseInt(div.style.top) + 10 + 'px';
    }
  });
});
