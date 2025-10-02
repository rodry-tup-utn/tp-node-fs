const fs = require('fs').promises;
const crearStringFecha = () => {
    const fechaActual = new Date().toLocaleDateString()
    const horaActual = new Date().toLocaleTimeString()
    return timeStamp = fechaActual + " " + horaActual + "\n";
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const guardarDatos = async (persona) => {
    const { nombre, edad, carrera } = persona;
    const datos = `
    Nombre: ${nombre}
    Edad: ${edad}
    Carrera: ${carrera}
    `;
    try {
        await fs.writeFile("datos.txt", datos);
        console.log("Datos de la persona guardados");
    } catch (error) {
        console.log("Error al guardar datos:");
    }
}

const leerArchivo = async (archivo) => {
    try {
        const data = await fs.readFile(archivo, "utf-8");
        console.log("Contenido del archivo\n", data);
        await fs.appendFile(archivo, "Archivo modificado - " + crearStringFecha(), "utf8");
    } catch (error) {

    }
}

const cambiarNombre = async (nombreActual, nombreNuevo) => {
    try {
        await fs.rename(nombreActual, nombreNuevo);
        console.log("Nombre cambiado exitosamente");
    } catch (error) {
        console.log("No se pudo cambiar el nombre del archivo");
    }
}

const borrarArchivo = async (archivo) => {
    try {
        await fs.unlink(archivo);
        console.log(`Archivo ${archivo} borrado`);
    } catch (error) {
        console.log("No se pudo borrar el archivo");
    }
    
}

async function main() {
    try {
        const persona = {nombre: "Rodrigo", edad: 34, carrera: "Programacion"};
        await guardarDatos(persona);

        await leerArchivo("datos.txt")

        await cambiarNombre("datos.txt", "informacion.txt")

        await delay(10000)
        await borrarArchivo("informacion.txt")

    } catch (error) {
        console.error("Error inesperado:", error);
    }
}

main();
