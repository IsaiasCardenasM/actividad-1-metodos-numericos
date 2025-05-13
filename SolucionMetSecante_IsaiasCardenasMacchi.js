const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function preguntar(pregunta) {
  return new Promise((resolve) => {
    // Hace una pregunta al usuario
    rl.question(pregunta, (respuesta) => {
      // Resuelve la promesa con la respuesta del usuario
      resolve(respuesta);
    });
  });
}

function f(x, a, b, c) {
  var cal;
  cal = a * x * x + b * x + c;

  return cal;
}

function resolverSecante(a, b, c, x0, x1, tol, maxIter) {
  var iteracion;
  var fx0, fx1, x2, errorAprox;
  iteracion = 0;
  errorAprox = 999999;
  while (iteracion < maxIter && errorAprox > tol) {
    fx0 = f(x0, a, b, c);
    fx1 = f(x1, a, b, c);
    if (Math.abs(fx1 - fx0) == 0) {
      console.log("La diferencia f(x1) - f(x0) es cero o muy pequeña. No se puede dividir.");
    } else {
      x2 = x1 - (fx1 * (x1 - x0)) / (fx1 - fx0);
      errorAprox = Math.abs(x2 - x1);
      x0 = x1;
      x1 = x2;
    }
    iteracion = iteracion + 1;
  }
  if (errorAprox <= tol) {
    console.log("La raíz aproximada es: " + x2);
  } else {
    console.log("No se ha encontrado ninguna raíz aproximada.");
  }
}

async function main() {
  var a, b, c, x0, x1, tol, maxIter;
  a = await preguntar("Ingrese el coeficiente a: ");
  b = await preguntar("Ingrese el coeficiente b: ");
  c = await preguntar("Ingrese el coeficiente c: ");
  x0 = await preguntar("Ingrese el valor x0: ");
  x1 = await preguntar("Ingrese el valor x1: ");
  tol = await preguntar("Ingrese el valor de tolerancia: ");
  maxIter = await preguntar("Ingrese el valor de máximas iteraciones: ");
  resolverSecante(Number(a), Number(b), Number(c), Number(x0), Number(x1), Number(tol), Number(maxIter));
  rl.close();
}

main();
