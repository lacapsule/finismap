let a = document.getElementsByTagName('menu')[0];
let b = document.getElementById('menuGeneral');
let c = document.getElementsByTagName('menu')[1];
let d = document.getElementById('menuEpci');
let e = document.getElementsByTagName('menu')[2];
let f = document.getElementById('menuPays');

b.onclick = (event) => {
  if (getComputedStyle(a).top === '-900px' && event.target !== a) {
    a.style.top = '25px';
    c.style.top = '-900px';
    e.style.top = '-900px';
  } else {
    a.style.top = '-900px';
  }
};

d.onclick = (event) => {
  if (getComputedStyle(c).top === '-900px' && event.target !== c) {
    c.style.top = '25px';
    a.style.top = '-900px';
    e.style.top = '-900px';
  } else {
    c.style.top = '-900px';
  }
};

f.onclick = (event) => {
  if (getComputedStyle(e).top === '-900px' && event.target !== e) {
    e.style.top = '25px';
    a.style.top = '-900px';
    c.style.top = '-900px';
  } else {
    e.style.top = '-900px';
  }
};
