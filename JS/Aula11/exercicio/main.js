// JavaScript e DOM
// objeto document
window.alert('Olá alunos');
alert('Olá alunos2');
console.log(document);
// Acessar informações
console.clear();
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.head);
console.log(document.body);
// Alterar o título
document.title = "Socorro Deus";
// Criar um elemento <h1>
let nomeUsuario= 'Marcos';
if(nomeUsuario==='Marcos'){
let heading = document.createElement('H1'); //ele não diferencia maiusculo e minusculo
heading.innerHTML = 'Olá Marcos!';
document.body.appendChild(heading);
}else{
    heading.innerHTML = 'Olá novo usuário!'
}