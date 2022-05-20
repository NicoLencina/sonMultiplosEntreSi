let dato1,
  dato2: number = 0;
let validador: number = 0;

function esMultiplo(x: number, y: number): number {
  validador = y % x;
  return validador;
}

dato1 = Number(prompt("Ingrese el primer Numero"));
dato2 = Number(
  prompt("Ingrese un segundo Numero para verificar si son multiplos:")
);

esMultiplo(dato1, dato2);

if (validador === 0) {
  console.log("El numero: " + dato2 + " es multiplo de: " + dato1);
} else {
  console.log("No son Multiplos");
}
