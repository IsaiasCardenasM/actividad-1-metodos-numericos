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

function resolverCuadratica(a, b, c) {
  var d;
  d = b * b - 4 * a * c;
  if (d > 0) {
    var raiz1, raiz2;
    raiz1 = (-b + Math.sqrt(d)) / (2 * a);
    raiz2 = -(b - Math.sqrt(d)) / (2 * a);
    console.log("Las raíces reales son: " + raiz1 + " y " + raiz2);
  } else {
    if (d == 0) {
      var raiz;
      raiz = (-b / 2) * a;
      console.log("La única raíz real es: " + raiz);
    } else {
      console.log("La ecuación no tiene raíces reales.");
    }
  }
}

async function main() {
  var a, b, c;
  a = await preguntar("Ingrese el coeficiente a: ");
  b = await preguntar("Ingrese el coeficiente b: ");
  c = await preguntar("Ingrese el coeficiente c: ");
  resolverCuadratica(Number(a), Number(b), Number(c));
  rl.close();
}

main();
