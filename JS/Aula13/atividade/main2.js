const btnBgColor = document.getElementById('btnBgColor');
btnBgColor.addEventListener('click', function() {
  const doce1 = document.getElementById('doce1');
  doce1.style.backgroundColor = 'yellow';
});
const btnFontWeight = document.getElementById('btnFontWeight');
btnFontWeight.addEventListener('click', function() {
  const doces = document.getElementsByClassName('doce');
  for (let i = 0; i < doces.length; i++) {
    doces[i].style.fontWeight = 'bold';
  }
});
const btnZebrado = document.getElementById('btnZebrado');
btnZebrado.addEventListener('click', function() {
  const itens = document.getElementsByTagName('li');
  for (let i = 0; i < itens.length; i++) {
    if (i % 2 === 0) {
      itens[i].style.backgroundColor = 'lightgray';
    } else {
      itens[i].style.backgroundColor = 'white';
    }
  }
});
const btnBorderBottom = document.getElementById('btnBorderBottom');
btnBorderBottom.addEventListener('click', function() {
  const doces = document.getElementsByName('doce');
  for (let i = 0; i < doces.length; i++) {
    doces[i].style.borderBottom = '1px solid black';
  }
});
const btnRemover = document.getElementById('btnRemover');
btnRemover.addEventListener('click', function() {
  const lista = document.getElementById('lista');
  const itemToRemove = lista.firstElementChild;
  lista.removeChild(itemToRemove);
});
