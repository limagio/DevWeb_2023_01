let notas = [];
function lerNotas() {
  for (let i = 1; i <= 4; i++) {
    let nota = parseFloat(prompt(`Digite a nota ${i}:`));
    notas.push(nota);
  }
}

function calcularMedia() {
  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }
  return soma / notas.length;
}

function exibirMedia() {
  let media = calcularMedia();
  console.log("A média do aluno com as 4 notas é:", media.toFixed(2));
}

lerNotas();
exibirMedia();
