let dato1, dato2: number;
let validador: boolean;

function esMultiplo(x: number, y: number): boolean {
  validador = x % y === 0;
  return validador;
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
