liseret.addEventListener("click", () => {
    if (getComputedStyle(Liseret).display != "none")
        Liseret.style.display = "none";
    else
        Liseret.style.display = "block";
});

couleurMer.addEventListener("input", () => {
    mer.style.background = couleurMer.value;
});

couleurLiseret.addEventListener("input", () => {
    Liseret.style.stroke = couleurLiseret.value;
});