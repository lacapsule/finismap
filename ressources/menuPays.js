let paysBrest = document.getElementsByClassName('Brest Iroise Abers Légendes Landerneau Crozon');
let couleurPaysBrest = document.getElementById('couleurPaysBrest');

couleurPaysBrest.addEventListener("input", () => {
    for (let i = 0; i < paysBrest.length; i++) {
        paysBrest[i].style.fill = couleurPaysBrest.value;
    }
});