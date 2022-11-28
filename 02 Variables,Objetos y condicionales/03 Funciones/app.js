// funciones 

function primeraFuncion()
{
    console.log("Hola mundo");
}

function ImprimirValor()
{
    var a=20;
    console.log(a);
}

ImprimirValor();
primeraFuncion();
//********************************************* */
// funciones con parametros

function imprimirValor2(a)
{
    console.log(a);
}
imprimirValor2(10);
//********************************************* */
// funciones con parametros y retorno
function imprimirValor3(a)
{
    return a;
}
var b=imprimirValor3(10);
console.log(b);
//********************************************* */
// funciones con parametros de tipo objeto
function imprimirValor4(a)
{
    return a;
}
var b=imprimirValor4({nombre:"Juan",apellido:"Perez"});
console.log(b);
//********************************************* */
//imrpimir funcion en una function
function imprimir(nombre,apellido)
{
    apelido = apellido || "Sin apellido";

    if (apellido===undefined)
    {
        apellido="Sin apellido";
    }
    console.log(nombre + " " + apellido);
}

imprimir( function (){
    console.log("Hola mundo");
})
//********************************************* */
imprmir ({
    nombre:"Juan",
    apellido:"Perez"
});
//********************************************* */
IMPRIMIR (function(){
    console.log("Hola mundo");
} , "Perez");
//********************************************* */  




