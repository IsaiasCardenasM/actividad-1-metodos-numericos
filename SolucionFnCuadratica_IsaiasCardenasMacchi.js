function main() {
  var a, b, c;
  window.alert("Ingrese el valor a:");
  a = Number(window.prompt("Enter a value for a"));
  window.alert("Ingrese el valor b:");
  b = Number(window.prompt("Enter a value for b"));
  window.alert("Ingrese el valor c:");
  c = Number(window.prompt("Enter a value for c"));
  resolverCuadratica(a, b, c);
}

function resolverCuadratica(a, b, c) {
  var d;
  d = b * b - 4 * a * c;
  if (d > 0) {
    var raiz1, raiz2;
    raiz1 = -b + (Math.sqrt(d) / 2) * a;
    raiz2 = -b - (Math.sqrt(d) / 2) * a;
    window.alert("Las raíces reales son:" + raiz1 + " y " + raiz2);
  } else {
    if (d == 0) {
      var raiz;
      raiz = (-b / 2) * a;
      window.alert("La única raíz real es: " + raiz);
    } else {
      window.alert("La ecuación no tiene raíces reales.");
    }
  }
}

main();
