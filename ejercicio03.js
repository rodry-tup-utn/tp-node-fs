const fs = require("fs");
const archivoContactos = "./contactos.json";

const leerContactos = () => {
  try {
    const textoArchivo = fs.readFileSync(archivoContactos, "utf8");
    const contactos = JSON.parse(textoArchivo);
    return contactos;
  } catch (error) {
    console.log("Error al leer el archivo");
    return null;
  }
};

const guardarContactos = (contactosActualizado) => {
  try {
    const textoGuardar = JSON.stringify(contactosActualizado, null, 2);
    fs.writeFileSync(archivoContactos, textoGuardar);
  } catch (error) {
    console.log("No se pudo guardar el archivo de contactos");
  }
};

const agregarContacto = (nombre, telefono, email) => {
  try {
    const contacto = {
        nombre : nombre,
        telefono: telefono,
        email : email
    }

    listaContactos = leerContactos();
    listaContactos.push(contacto);
    guardarContactos(listaContactos);

    console.log("Contacto agregado exitosamente");
  } catch (error) {
    console.log("No se pudo agregar el contacto");
  }
};

const mostrarContactos = () => {
    const contactos = leerContactos();
    contactos.forEach(element => {
        console.log("Nombre:" + element.nombre);
        console.log("Telefono:" + element.telefono);
        console.log("Email:" + element.email + "\n");
    });
}

const eliminarContacto = (nombreContacto) => {
    const contactos = leerContactos();
    const nuevosContactos = contactos.filter(contacto => contacto.nombre.toLowerCase() != nombreContacto.toLowerCase())

    if (contactos.length != nuevosContactos.length) {
        console.log("Se borro el contacto " + nombreContacto + " satisfactoriamente");
        guardarContactos(nuevosContactos);
    } else {
        console.log("No se encontró el contacto a borrar");
    }
 
} 


  agregarContacto("Rodrigo", 232344, "rodry@example.com");
  agregarContacto("Rocio", 232332, "rocy@example.com");
  agregarContacto("Bernardo", 423432, "bernie@example.com");

  mostrarContactos();

  eliminarContacto("rodrigo");
  mostrarContactos();

