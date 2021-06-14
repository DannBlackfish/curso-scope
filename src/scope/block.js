//Mientro llamemos dentro de llaves {} eso va a ser un bloque
//Si todos tienen var que se encuentra dentro del scope local se le puede llamar a la variable y saldrían las tres frutas, 
const fruits = () => {
    if (true) {
        var fruits1 = 'apple';
        var fruits2 = 'banana';
        var fruits3 = 'kiwi';
    }
    console.log(fruits1);
    console.log(fruits2);
    console.log(fruits3);
};

fruits();

//mientras que si cambiamos a let y const no vamos a poder acceder porque solo podemos acceder a ese bloque.
const fruits = () => {
    if (true) {
        var fruits1 = 'apple';
        let fruits2 = 'banana';
        const fruits3 = 'kiwi';
    }
    console.log(fruits1);
    console.log(fruits2);
    console.log(fruits3);
};

fruits();

//Si los traemos dentro del bloque ahora si se van a poder ejecturar
const fruits = () => {
    if (true) {
        var fruits1 = 'apple';
        let fruits2 = 'banana';
        const fruits3 = 'kiwi';
        console.log(fruits2);
        console.log(fruits3);
    }
    console.log(fruits1);
};

fruits();

//Asignamos un valor global en let x = 1 y local al let x = 2
let x = 1;
{
    let x = 2;
    console.log(x);
}

console.log(x);

//Que pasa si lo cambiamos a var, el valor se reasigna 
var x = 1;
{
    var x = 2;
    console.log(x);
}

console.log(x);

//Con var se va reasignando el valor e imprime el número 10, 10 veces.
const anotherFunction = () => {
    for (var i = 0; i < 10; i++ ) {
        setTimeout(() => {
            console.log(i)
        }, 1000)
    }
};

anotherFunction();

//Si lo asignamos con let va a imprimir los pasos del 0 al 9
const anotherFunction = () => {
    for (let i = 0; i < 10; i++ ) {
        setTimeout(() => {
            console.log(i)
        }, 1000)
    }
};

anotherFunction();
