couleurCommunes.addEventListener("input", () => {
    toutesCommunes.style.fill = couleurCommunes.value;
});

couleurFrontieres.addEventListener("input", () => {
    toutesCommunes.style.stroke = couleurFrontieres.value;
});
