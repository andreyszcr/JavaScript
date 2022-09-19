var persona =
{
    nombre: "Juan",
    apellido: "Perez",
    edad: 28,
    direccion: 
    {
        calle: "Av. Siempre Viva",
        numero: 742,
        ciudad: "San Jose",
        pais: "Costa Rica"
    },
    edificio : 
    {
        nombre: "Edificio Principal",
        telefono: "2222-3333"

    }
};
// impresion en consola
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.direccion.calle);
//***************************************** */
persona.direccion.zipcode=11111;

console.log(persona.direccion.zipcode);
console.log(persona.direccion);
//***************************************** */
var edificio = persona.direccion.edificio;

//edificio.nopiso="8vo piso";

console.log(persona);
//**************************************************************** */
var campo ="";

// mejor manera de como decirle que campo necesito
console.log( persona["nombre"] );
