//No podemos cambiar ni reasignar el valor de set name desde otro lado de laaplicacion tenemos que disponer de los métodos que acabamos de crear para hacer estas signaciones asi genermaos un valor privado y que no tenemos acceso a ella y asi manejar datos privados
const person = () => {
    var saveName = "Name";
    return {
        getName: () => {
            return saveName;
        },
        setName: (name) => {
            saveName = name;
        },
    };
};

newPerson = person ();
console.log(newPerson.getName());
newPerson.setName('Oscar');
console.log(newPerson.getName());