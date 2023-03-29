// Crea una lista de contactos con datos predefinidos
let contactList = ["Juan Perez", "Maria Garcia", "Pedro Lopez", "Laura Torres"];

// Función para agregar un nuevo contacto a la lista
function addContact(contact, contactList) {
  contactList.push(contact);
}

// Función para eliminar un contacto existente de la lista
function deleteContact(contact, contactList) {
  let index = contactList.indexOf(contact);
  if (index !== -1) {
    contactList.splice(index, 1);
  }
}

// Función para imprimir en consola los contactos presentes en la lista
function printContacts(contactList) {
  console.log("Lista de contactos:");
  contactList.forEach(function(contact) {
    console.log(contact);
  });
}

// Agrega un nuevo contacto a la lista
addContact("Sofia Ramirez", contactList);

// Elimina un contacto de la lista
deleteContact("Maria Garcia", contactList);

// Imprime en consola los contactos presentes en la lista
printContacts(contactList);