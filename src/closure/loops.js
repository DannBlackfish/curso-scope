//Involuntariamente estabamos creando un closure que no estaba cumpliendo con el objetivo lo resolviamos poniendo la palabra let para tener el alcance que va a recordar del valor que es necesario
//closure para el manejo de datos privados o asignación de métodos
//podemos crear este tipo de closure de forma involuntaria y debemos tner cuidado 
const anotherFunction = () => {
    for (var i = 0; i < 10; i++ ) {
        setTimeout(() => {
            console.log(i)
        }, 1000)
    }
};

anotherFunction();