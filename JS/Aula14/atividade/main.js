const formulario = document.getElementById('formulario');
const btnIncluir = document.getElementById('btnIncluir');
const btnExcluir = document.getElementById('btnExcluir');
const listaInscritos = document.getElementById('listaInscritos');

function adicionarInscrito(nome, dataNasc, email) {
  const li = document.createElement('li');
  li.textContent = `${nome} - ${dataNasc} - ${email}`;
  listaInscritos.appendChild(li);
}
function validarDataNascimento(dataNasc) {
  const hoje = new Date();
  const nascimento = new Date(dataNasc);
  const idadeMinima = 18;
  return hoje.getFullYear() - nascimento.getFullYear() >= idadeMinima;
}
function validarEmail(email) {
  return emailRegex.test(email);
}
function limparCampos() {
  document.getElementById('nome').value = '';
  document.getElementById('dataNasc').value = '';
  document.getElementById('email').value = '';
}
btnIncluir.addEventListener('click', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const dataNasc = document.getElementById('dataNasc').value;
  const email = document.getElementById('email').value;

  if (validarDataNascimento(dataNasc) && validarEmail(email)) {
    adicionarInscrito(nome, dataNasc, email);
    limparCampos();
  } else {
    alert('Por favor, preencha corretamente os campos.');
  }
});
btnExcluir.addEventListener('click', function(event) {
  event.preventDefault();

  const item = prompt('Digite o código do item a ser excluído:');
  const inscritos = listaInscritos.getElementsByTagName('li');

  for (let i = 0; i < inscritos.length; i++) {
    const codigoItem = i + 1;

    if (codigoItem.toString() === item)
