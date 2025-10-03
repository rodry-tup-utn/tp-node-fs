const fs = require("fs");
const pathTexto = "texto.txt";

const leerArchivo = (path) => {
  try {
    const texto = fs.readFileSync(path, "utf8");
    return texto;
  } catch (error) {
    return null;
  }
};

const contarPalabras = (palabra, texto) => {
  const textoFormateado = texto.replaceAll(".", "").replaceAll(",", "");
  const arrayPalabras = textoFormateado.split(" ");
  const totalPalabras = arrayPalabras.filter((e) => e === palabra).length;
  return totalPalabras;
};

function main() {
  const params = process.argv;

  if (params.length < 4) {
    console.log(
      "Faltan parámetros en la funcion: node contarPalabras.js <archivoTexto.txt> <palabraAContar>"
    );
  }

  const pathArchivo = params[2];
  const palabraAContar = params[3];

  const texto = leerArchivo(pathArchivo);

  if (texto == null) {
    console.log("No se pudo leer el archivo");
    return;
  }
  const totalPalabras = contarPalabras(palabraAContar, texto);

  console.log(`La palabra '${palabraAContar}' aparece ${totalPalabras} veces`);
}

main();
