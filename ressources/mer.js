let mer = document.getElementById("mer");
couleurMer.addEventListener("input", () => {
    mer.style.background = couleurMer.value;
});

liseret.addEventListener("click", () => {
    if (getComputedStyle(Liseret).display != "none")
        Liseret.style.display = "none";
    else
        Liseret.style.display = "block";
});
