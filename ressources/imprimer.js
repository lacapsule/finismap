const canvas = document.querySelector("#imprimer");
const aperçu = document.getElementById("boutonMenuAperçu");

aperçu.addEventListener('mousedown', telecharger);


let ongoingTouches = [];

canvas.addEventListener('touchstart', (event) => {
  event.preventDefault();
  const touches = event.changedTouches;
  for (let i = 0; i < touches.length; i++) {
    ongoingTouches.push(copyTouch(touches[i]));
  }
});

canvas.addEventListener('touchmove', (event) => {
  event.preventDefault();
  const touches = event.changedTouches;
  for (let i = 0; i < touches.length; i++) {
    const idx = ongoingTouchIndexById(touches[i].identifier);
    if (idx >= 0) {
      const x = touches[i].clientX;
      const y = touches[i].clientY;
      canvas.style.transform = `translate(${x}px, ${y}px)`;
    }
  }
});

canvas.addEventListener('touchend', (event) => {
  event.preventDefault();
  const touches = event.changedTouches;
  for (let i = 0; i < touches.length; i++) {
    const idx = ongoingTouchIndexById(touches[i].identifier);
    if (idx >= 0) {
      ongoingTouches.splice(idx, 1);
    }
  }
});

const context = canvas.getContext('2d');
const image = new Image();
image.src = 'path/to/image';
image.onload = function() {
  const pattern = context.createPattern(image, 'repeat');
  context.fillStyle = pattern;
  context.fillRect(0, 0, canvas.width, canvas.height);
}

function copyTouch(touch) {
  return { identifier: touch.identifier, clientX: touch.clientX, clientY: touch.clientY };
}

function ongoingTouchIndexById(idToFind) {
  for (let i = 0; i < ongoingTouches.length; i++) {
    const id = ongoingTouches[i].identifier;
    if (id === idToFind) {
      return i;
    }
  }
  return -1;
}

function telecharger() {
  html2canvas(document.querySelector("#imprimer")).then(function(canvas) {
   
    const img = new Image();
    img.src = canvas.toDataURL("image/png");
    img.addEventListener("click", function() {
      document.getElementById("lightbox").style.display = "none";
    });

    const lightbox = document.getElementById("lightbox");
    lightbox.innerHTML = "";
    lightbox.appendChild(img);
    lightbox.style.display = "block";

    lightbox.addEventListener("click", function(event) {
      if (event.target === lightbox) {
        lightbox.style.display = "none";
      }
    });
  });
}

