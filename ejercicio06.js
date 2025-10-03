const fs = require("fs");
const carpetaLogs = "logs/";
const archivoLogs = carpetaLogs + "app.log";

const crearStringFecha = () => {
  const fechaActual = new Date().toLocaleDateString();
  const horaActual = new Date().toLocaleTimeString();
  return fechaActual + " " + horaActual + "\n";
};

const comprobarCarpeta = (pathDirectorio) => {
  if (!fs.existsSync(pathDirectorio)) {
    fs.mkdirSync(pathDirectorio);
    console.log("Carpeta creada");
  }
};

const guardarLog = () => {
  try {
    comprobarCarpeta(carpetaLogs);

    if (fs.existsSync(archivoLogs)) {
      fs.appendFileSync(
        archivoLogs,
        "Ejecutión exitosa - " + crearStringFecha(),
        "utf8"
      );
    } else {
      fs.writeFileSync(
        carpetaLogs + "app.log",
        "Ejecución exitosa - " + crearStringFecha(),
        "utf8"
      );
    }
    console.log("Ejecucion exitosa");
  } catch (error) {
    console.log("No se pudo ejecutar la tarea");
  }
};

const mostrarUltimasLineas = () => {
	const lineas = 5;

	try {
		const data = fs.readFileSync(archivoLogs, "utf8");
		const arrayLogs = data.split("\n");
		const ultimas = arrayLogs.splice(-lineas);
		console.log("Ultimas ejecuciones del programa:");
		ultimas.forEach(element => {
			console.log(element);
		});
	} catch (error) {
		console.log("No se pudo leer el archivo");
	}
}

const params = process.argv;

if (params.length < 3) {
	guardarLog();
}

if (params[2] == "logs") {
	mostrarUltimasLineas()
}