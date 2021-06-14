//ALcance de global
//podemos acceder a esta variable porque esta en forma global

var hello = 'Hello';

//El scope es el alcance de las variables que estamos asignando

let world = 'Hello world';
const helloWorld = 'Hello World';

//podemos acceder a través de esta función a esas variables
//Yo no puedo reasignar algún valor a algunos de estos elementos por ejemplo con let y const nosotros no podemos volver a asignar un valor a esa variable
const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

//Errores en variables globales
//Estoy asignando una variable global a pesar de que esta dentro de una función, esto es una mala práctica
const helloWorld = () => {
    globalVar = 'Im global'
}

helloWorld();
console.log(globalVar);

//Dentro hay un var y esto tambien es una mala práctica
const anotherFunction = () => {
    var localVar = globalVar = 'Im global'
}
helloWorld();
console.log(globalVar)