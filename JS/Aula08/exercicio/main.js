const boasVindas = () => {
    alert('Bem vinde i tudo bein');
    console.log('Bem vindo a nossa página');
};

var a = 3;
var b = 4;
var c = -5;

function contaUm() {
  const delta = b * b - 4 * a * c;
  const x1 = (-b + Math.sqrt(delta)) / (2 * a);
  const x2 = (-b - Math.sqrt(delta)) / (2 * a);

  exibirResultado(x1, x2);
}

const contaDois = () => {
  const delta = b * b - 4 * a * c;
  const x1 = (-b + Math.sqrt(delta)) / (2 * a);
  const x2 = (-b - Math.sqrt(delta)) / (2 * a);

  exibirResultado(x1, x2);
}

const exibirResultado = (x1, x2) => {
  console.log(`x1 = ${x1}, x2 = ${x2}`);
}

console.log("A página foi carregada!");

const botao = document.getElementById('calcular-btn');
botao.addEventListener('click', contaDois);
