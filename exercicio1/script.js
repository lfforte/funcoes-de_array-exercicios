const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8,];

const quintuplos = arrayNumeros.map((elemento) => {
  const novoArray = elemento * 5;
  return novoArray;
});
console.log(quintuplos);

const metades = quintuplos.map((elementos) => {
  const arrayNovo = elementos / 2;
  return arrayNovo;
})
console.log(metades);