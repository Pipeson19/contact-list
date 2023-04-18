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
