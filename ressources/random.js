function randomizeColors(className) {
    let editables = document.querySelectorAll('.' + className);
    let colors = [];
  
    for (let i = 0; i < editables.length; i++) {
      let color = getRandomColor();
      colors.push(color);
      editables[i].style.fill = color;
    }
  
    let inputs = document.getElementsByTagName('input');
  
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].style.color = colors[i];
    }
  }
  
  function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
  
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
  
    return color;
  }
  
  export { randomizeColors };
  

