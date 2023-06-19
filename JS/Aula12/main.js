const inputValor = document.getElementById('valor');
const btnCalcular = document.getElementById('calcular');
const divTabuada = document.getElementById('tabuada');

function calcularTabuada() {
  divTabuada.innerHTML = '';

  const valor = parseInt(inputValor.value);

  if (isNaN(valor)) {
    divTabuada.textContent = 'Por favor, digite um número válido.';
    return;
  }

  for (let i = 1; i <= 10; i++) {
    const resultado = valor * i;
    const linhaTabuada = `${valor} x ${i} = ${resultado}`;
    const paragrafo = document.createElement('p');
    paragrafo.textContent = linhaTabuada;
    divTabuada.appendChild(paragrafo);
  }
}
btnCalcular.addEventListener('click', calcularTabuada);
