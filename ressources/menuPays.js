const paysBrest = document.querySelectorAll(".Brest, .Iroise, .Abers, .Légendes, .Landerneau-Daoulas, .Crozon-Aulne");
const paysMorlaix = document.querySelectorAll(".Morlaix, .Landivisiau, .Haut-Léon");
const paysCob = document.querySelectorAll(".Monts, .Poher, .Cornouaille");
const paysCornouaille = document.querySelectorAll(".Quimper, .Pleyben-Châteaulin-Porzay, .Douarnenez, .Cap, .Bigouden, .Sud, .fouesnantais, .Concarneau");
const paysLorient = document.querySelectorAll(".Quimperlé");

couleurPaysBrest.addEventListener("input", () => {
    Array.from(paysBrest).forEach((brest) => {
        brest.style.fill = couleurPaysBrest.value;
    });
});

couleurPaysMorlaix.addEventListener("input", () => {
    Array.from(paysMorlaix).forEach((morlaix) => {
        morlaix.style.fill = couleurPaysMorlaix.value;
    });
});

couleurPaysCob.addEventListener("input", () => {
    Array.from(paysCob).forEach((cob) => {
        cob.style.fill = couleurPaysCob.value;
    });
});

couleurPaysCornouaille.addEventListener("input", () => {
    Array.from(paysCornouaille).forEach((cornouaille) => {
        cornouaille.style.fill = couleurPaysCornouaille.value;
    });
});

couleurPaysLorient.addEventListener("input", () => {
    Array.from(paysLorient).forEach((lorient) => {
        lorient.style.fill = couleurPaysLorient.value;
    });
});