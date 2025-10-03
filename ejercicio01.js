const fs = require("fs");
const crearStringFecha = () => {
  const fechaActual = new Date().toLocaleDateString();
  const horaActual = new Date().toLocaleTimeString();
  return fechaActual + " " + horaActual + "\n";
};
const guardarLog = (mensaje) => {
  const timeStamp = crearStringFecha();
  const mensajeFinal = mensaje + " - " + timeStamp;
  try {
    fs.appendFileSync("log.txt", mensajeFinal, "utf8");
    console.log(mensajeFinal);
  } catch (error) {
    console.log("No se pudo crear el log:");
  }
};

async function main() {
  try {
    guardarLog("Inicio de programa");

    setTimeout(() => {
      guardarLog("Ejecutando tarea...");
    }, 0);

    setTimeout(() => {
      guardarLog("Tarea finalizada");
    }, 3000);
  } catch (error) {
    console.log("Error al ejecutar la tarea");
  }
}

main();
