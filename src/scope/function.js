//Función 
const fruits = () => {
    var fruit = 'apple';
    console.log(fruit);
};

fruits();

//Let ya no puede ser asignada de nuevo por que ya esta asignada
//Var si asigna un nuevo valor a esa variable
//Lo mejor es usar let y const y dejar de usar var para la asignación de las variables
const anotherFunction = () => {
    var x = 1;
    var x = 2;
    let y = 1;
    let y = 2;
    console.log(x);
    console.log(y);
};

anotherFunction();