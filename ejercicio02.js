const fs = require("fs");

const crearStringFecha = () => {
  const fechaActual = new Date().toLocaleDateString();
  const horaActual = new Date().toLocaleTimeString();
  return fechaActual + " " + horaActual + "\n";
};

const guardarDatos = (persona) => {
  const { nombre, edad, carrera } = persona;
  const datos = `
  Nombre: ${nombre}
  Edad: ${edad}
  Carrera: ${carrera}
  `;
  try {
    fs.writeFileSync("datos.txt", datos);
    console.log("Datos de la persona guardados");
  } catch (error) {
    console.log("Error al guardar datos:");
  }
};

const leerArchivo = (archivo) => {
  try {
    const data = fs.readFileSync(archivo, "utf-8");
    console.log("Contenido del archivo\n", data);
    fs.appendFileSync(
      archivo,
      "Archivo modificado - " + crearStringFecha(),
      "utf8"
    );
  } catch (error) {
    console.log("Error al leer archivo");
  }
};

const cambiarNombre = (nombreActual, nombreNuevo) => {
  try {
    fs.renameSync(nombreActual, nombreNuevo);
    console.log("Nombre cambiado exitosamente");
  } catch (error) {
    console.log("No se pudo cambiar el nombre del archivo");
  }
};

const borrarArchivo = (archivo) => {
  try {
    fs.unlinkSync(archivo);
    console.log(`Archivo ${archivo} borrado`);
  } catch (error) {
    console.log("No se pudo borrar el archivo");
  }
};

function main() {
  try {
    const persona = { nombre: "Rodrigo", edad: 34, carrera: "Programacion" };
    guardarDatos(persona);

    leerArchivo("datos.txt");

    cambiarNombre("datos.txt", "informacion.txt");

    setTimeout(() => {
        borrarArchivo("informacion.txt");
    }, 10000);
  } catch (error) {
    console.error("Error inesperado:", error);
  }
}

main();
