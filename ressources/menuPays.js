let paysBrest = document.querySelectorAll('.Brest, .Iroise, .Abers, .Légendes, .Landerneau, .Crozon');

couleurPaysBrest.addEventListener("input", () => {
    for (let i = 0; i < paysBrest.length; i++) {
        paysBrest[i].style.fill = couleurPaysBrest.value;
    }
});