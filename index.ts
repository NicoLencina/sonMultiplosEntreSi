let dato1, dato2: number;
let validador: boolean;

function esMultiplo(x, y): boolean {
  validador = x % y === 0;
}

dato1 = prompt("Ingrese el primer Numero");
dato2 = prompt("Ingrese un segundo Numero para verificar si son multiplos:");

esMultiplo(dato1, dato2);

if (validador) {
  console.log("El numero " + dato1 + "es multiplo de " + dato2);
} else {
  console.log("No son Multiplos");
}
