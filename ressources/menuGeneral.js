let a = document.getElementsByTagName('aside')[0]; 
let b = document.getElementById('menuGeneral');

b.addEventListener("click", () => {
    if(getComputedStyle(a).left === '-430px')
      a.style.left = "0";
    else
      a.style.left = "-430px";
  })
function fleche() {
    this.classList.toggle('ferme');
    this.classList.toggle('ouvert');
    }
    document.querySelector('#menuGeneral').addEventListener('click', fleche);
    