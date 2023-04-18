class Contacto {
  constructor(id, nombres, apellidos, telefono, ubicaciones, ciudad, direccion) {
    this.id = id;
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.telefono = telefono;
    this.ubicaciones = ubicaciones;
    this.ciudad = ciudad;
    this.direccion = direccion;
  }
}
function agregarContacto(id, nombres, apellidos, telefono, ubicaciones, ciudad, direccion) {
  const contacto = new Contacto(id, nombres, apellidos, telefono, ubicaciones, ciudad, direccion);
  contactos.push(contacto);
}
function eliminarContacto(id) {
  const indice = contactos.findIndex(contacto => contacto.id === id);
  if (indice !== -1) {
    contactos.splice(indice, 1);
  }
}
// Lista de contactos predefinidos
let contactList = [
  { nombre: "Juan Pérez", telefono: "555-1234" },
  { nombre: "María López", telefono: "555-5678" },
  { nombre: "Pedro Rodríguez", telefono: "555-9012" }
];

// Función para añadir un nuevo contacto a la lista
function agregarContacto(nombre, telefono) {
  contactList.push({ nombre, telefono });
  console.log("Contacto añadido con éxito!");
}

// Función para eliminar un contacto existente de la lista
function eliminarContacto(nombre) {
  let index = -1;
  for (let i = 0; i < contactList.length; i++) {
    if (contactList[i].nombre === nombre) {
      index = i;
      break;
    }
  }
  if (index >= 0) {
    contactList.splice(index, 1);
    console.log("Contacto eliminado con éxito!");
  } else {
    console.log("El contacto no existe en la lista.");
  }
}

// Función para imprimir en consola los contactos presentes en la lista
function imprimirContactos() {
  console.log("Lista de contactos:");
  for (let i = 0; i < contactList.length; i++) {
    console.log(`- ${contactList[i].nombre}, ${contactList[i].telefono}`);
  }
}

// Ejemplo de uso de las funciones
agregarContacto("Ana Gómez", "555-3456");
imprimirContactos();
eliminarContacto("María López");
imprimirContactos();
// Función para eliminar un contacto existente de la lista
function deleteContact(id) {
  contactList = contactList.filter(function(contact) {
    return contact.id !== id;
  });
}

// Función para actualizar un contacto existente en la lista
function updateContact(id, updatedFields) {
  let contactToUpdate = contactList.find(function(contact) {
    return contact.id === id;
  });

  Object.assign(contactToUpdate, updatedFields);
}

// Función para imprimir en consola los contactos presentes en la lista
function printContacts() {
  contactList.forEach(function(contact) {
    console.log(`ID: ${contact.id} | Nombre: ${contact.name} | Teléfono: ${contact.phone} | Ciudad: ${contact.location.city} | Dirección: ${contact.location.address}`);
  });
}

// Agregamos un nuevo contacto
addContact('Pedro Martinez', '5555555', {city: 'Monterrey', address: 'Av. Constitucion 789'});

// Imprimimos los contactos antes de actualizar
console.log('Contactos antes de actualizar:');
printContacts();

// Actualizamos el contacto con ID 2
updateContact(2, {name: 'Ana Torres', phone: '1111111', location: {city: 'Puebla', address: 'Calle 1'}});

// Imprimimos los contactos después de actualizar
console.log('Contactos después de actualizar:');
printContacts();