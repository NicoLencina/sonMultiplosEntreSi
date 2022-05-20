let dato1,
  dato2: number = 0;
let validador: boolean = true;

function esMultiplo(x: number, y: number): boolean {
  let resul: number = y % x;
  if (resul === 0) {
    return (validador = true);
  } else {
    return (validador = false);
  }
}

dato1 = Number(prompt("Ingrese el primer Numero"));
dato2 = Number(
  prompt("Ingrese un segundo Numero para verificar si son multiplos:")
);

esMultiplo(dato1, dato2);
console.log(validador);
if (validador === true) {
  console.log("El numero " + dato2 + " es multiplo de " + dato1);
} else {
  console.log("No son Multiplos");
}
