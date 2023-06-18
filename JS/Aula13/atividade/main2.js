let titulo = document.getElementById('titulo');
titulo.style.background = 'red';

let unorder = document.getElementsByClassName('chiclete');
unorder[1].style.fontWeight = 'bold';

let li = document.getElementsByTagName('li');
for (let i = 0; i < li.length; i++) {
    if (i % 2) li[i].style.backgroundColor = '#fff';
    else li[i].style.backgroundColor = '#b6b6b6';
}

