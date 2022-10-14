function obtenerAleatorio() {
    return Math.random();
}   

function obtenerNombre() {
    return "Juan";
}

function esMayor05() {
    if (obtenerAleatorio() > 0.5) {
        return true;
    } else {
        return false;
    }
}

console.log(obtenerAleatorio());
console.log(obtenerNombre());

if (esMayor05()) {
    console.log("Es mayor a 0.5");
} else {
    console.log("Es menor a 0.5");
}

function crearFunction(){
    return function(nombre){
        console.log("Me crearon " + nombre);
        return function(){
            console.log("Segunda funcion");
        }
    }
    
}