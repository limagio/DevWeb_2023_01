const slider = document.getElementById('slider');
const imagens = slider.getElementsByTagName('img');
const mensagens = document.getElementsByClassName('mensagem');
let slideAtual = 0;
function exibirSlide() {
  for (let i = 0; i < imagens.length; i++) {
    imagens[i].classList.remove('active');
    mensagens[i].classList.remove('active');
  }

  imagens[slideAtual].classList.add('active');
  mensagens[slideAtual].classList.add('active');
}
function avancarSlide() {
  slideAtual++;
  if (slideAtual >= imagens.length) {
    slideAtual = 0;
  }

  exibirSlide();
}
function retrocederSlide() {
  slideAtual--;
  if (slideAtual < 0) {
    slideAtual = imagens.length - 1;
  }

  exibirSlide();
}
const intervalo = setInterval(avancarSlide, 3000);
const btnAvancar = document.createElement('button');
btnAvancar.textContent = 'Avançar';
btnAvancar.addEventListener('click', function() {
  clearInterval(intervalo);
  avancarSlide();
});
const btnRetroceder = document.createElement('button');
btnRetroceder.textContent = 'Retroceder';
btnRetroceder
