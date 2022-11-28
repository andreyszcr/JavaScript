var andrey = new Persona()
{
    nombre: 'Andrey';
    apellido: 'Perez';
    edad: 28;
    
}

function Persona(nombre,apellido)
{
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = 28;
    this.imprimirValor2 = function()
    {
        console.log(this.nombre + ' ' + this.apellido + ' ' + this.edad);
    }
}

var juan = new Persona();
Console.log(juan);

var person = new Persona('Andrey','Perez');

