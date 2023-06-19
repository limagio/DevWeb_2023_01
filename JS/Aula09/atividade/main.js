const newLocal = [17, 43, 8, 4, 97, 56, 29];
const verificarParImpar = (numero) => {
  if (numero % 2 === 0) {
    console.log(`${numero} é par.`);
  } else {
    console.log(`${numero} é ímpar.`);
  }
};
console.log("")
console.log("")

const array = [17, 43, 8, 4, 97, 56, 29, 3, 75, 34, 88, 82, 61];

const valoresEntre20e80 = array.filter((numero) => {
  if (numero >= 20 && numero <= 80) {
    return true;
  } else {
    return false;
  }
});
console.log("");
