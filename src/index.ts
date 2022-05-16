let dato2: number;
let dato1: number;
let validador: boolean;

function esMultiplo(dato1: number, dato2: number) {
  let resultado: number = 0;
  resultado = dato1 / dato2;
  if (resultado === 0) {
    validador = true;
  } else {
    validador = false;
  }
}

dato1 = Number(prompt("Ingrese el primer Numero"));
dato2 = Number(
  prompt("Ingrese un segundo Numero para verificar si son multiplos:")
);

esMultiplo(dato1, dato2);

if (validador === true) {
  console.log("El numero " + dato1 + "es multiplo de " + dato2);
} else {
  console.log("No son Multiplos");
}
