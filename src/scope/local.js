//La variable esta asignada al bloque 
const helloWorld = () => {
    const hello = 'Hello World';
    console.log(hello);
};

helloWorld();

//que pasa si ejectuamos un console log del hello
//No puede acceder a el por que no esta definido de forma global 
console.log(hello)

//Scope local: Como accede a una varible dentro de un bloque o una funcion

//El output e esta función 
//Ámbito léxico la función tiene acceso a la variable var que esta adentro de la funcion uy es con la quee sta tabajando. El scope que esta adentro lo toma como una función local y no reasigna ese valor
//e
var scope = 'I am global'

const functionScope = () => {
    var scope = "I am a justa a local"
    const func = () => {
        return scope
    }
    console.log(func());
};

functioneScope();
console.log(scope);

