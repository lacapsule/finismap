const canvas = document.querySelector("#imprimer");
const aperçu = document.getElementById("boutonMenuAperçu");

aperçu.addEventListener('mousedown', telecharger);

function telecharger() {
  html2canvas(document.querySelector("#imprimer"))
  .then(function(canvas) {
    window.open(canvas.toDataURL("image/png", 1.0), '_blank');
  });
}

window.printDiv = function(imprimer) {
  let innerContents = document.getElementById(imprimer).innerHTML; 
  window.print();
};

function download() {
  boutonMenuEnregistrer.addEventListener("click", () => {
    var downloading = browser.downloads.download("#imprimer")
    var dl = document.getElementById('#imprimer');
    dl.src = "carteMorlaixCommunaute.png";
  })
}

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
      canvas.style.transform = `translate(\${x}px, \${y}px)`;
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

function telecharger(event) {
  if (event.type === 'mousedown') {
    html2canvas(document.querySelector("#imprimer"))
    .then(function(canvas) {
      window.open(canvas.toDataURL("image/png", 1.0), '_blank');
    });
  } else if (event.type === 'touchstart') {
    html2canvas(document.querySelector("#imprimer"))
    .then(function(canvas) {
      window.open(canvas.toDataURL("image/png", 1.0), '_blank');
    });
  }
}