let dato1,
  dato2: number = 0;
let validador: number = 0;

function esMultiplo(x: number, y: number): number {
  validador = x % y;
  return validador;
}

dato1 = Number(prompt("Ingrese el primer Numero"));
dato2 = Number(
  prompt("Ingrese un segundo Numero para verificar si son multiplos:")
);

esMultiplo(dato1, dato2);

if (validador === 0) {
  console.log("El numero " + dato1 + "es multiplo de " + dato2);
} else {
  console.log("No son Multiplos");
}
