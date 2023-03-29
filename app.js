// Declaración de una lista vacía para almacenar los contactos
let contactos = [];

// Función para crear un nuevo contacto
function crearContacto(id, nombres, apellidos, telefono, ubicaciones) {
  // Crear un objeto de contacto con las propiedades proporcionadas
  const contacto = {
    id: '',
    nombres: '',
    apellidos: '',
    telefono: '',
    ubicaciones: ''
  };
  // Agregar el objeto de contacto a la lista de contactos
  contactos.push(contacto);
}

// Función para eliminar un contacto por su ID
function eliminarContacto(id) {
  // Buscar el índice del contacto con el ID proporcionado
  const indice = contactos.findIndex(contacto => contacto.id === id);
  // Si se encuentra el contacto, eliminarlo de la lista de contactos
  if (indice !== -1) {
    contactos.splice(indice, 1);
  }
}

console.log(contactos)