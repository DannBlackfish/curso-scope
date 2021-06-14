//se puede acceder a count por que puede acceder a ese valor 
//podemos tabajar con mycount y ejecutarla
//podemos hace una segunda y trabajar con my other count 
const buildCount = (i) => {
    let count = i;
    const displayCount = () => {
        console.log(count++);
    };
    return displayCount;
};

const myCount = buildCount(1);
myCount();
myCount();
myCount();

const myOtherCount = buildCount(10);
myOtherCount();
myOtherCount();