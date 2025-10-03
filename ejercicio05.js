const fs = require("fs");
const archivoOrigen = "archivos/original.txt";
const archivoDestino = "archivos/copia.txt";

const leerArchivo = (archivo) => {
  try {
    const data = fs.readFileSync(archivo, "utf-8");
    return data;
  } catch (error) {
    return null;
  }
};

const copiarArchivo = (origen, destino) => {
  try {
    const textoOrigen = leerArchivo(origen);
    if (textoOrigen == null) {
      console.log("No se encontro el archivo de origen");
      return;
    }
    fs.writeFileSync(destino, textoOrigen, "utf8");
    console.log("El archivo se copio correctamente");
  } catch (error) {
    console.log("No se pudo procesar la operacion");
  }
};

copiarArchivo(archivoOrigen, archivoDestino);
