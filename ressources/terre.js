couleurCommunes.addEventListener("input", () => {
    communes.style.fill = couleurCommunes.value;
});

couleurDepartements.addEventListener("input", () => {
    Morbihan.style.fill = couleurDepartements.value;
    Cotes_d_Armor.style.fill = couleurDepartements.value;
});

couleurFrontieres.addEventListener("input", () => {
    communes.style.stroke = couleurFrontieres.value;
    departements.style.stroke = couleurFrontieres.value;
});