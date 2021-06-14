//En este ejemplo no esta guardadno los elementos no retorna en la segunda ej 15 esta imprimiendo el valor que le estoy pasando no esta haciendo un closure
const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`)
};

moneyBox(5);
moneyBox(10);

//estructura de closure
//Rcuerda la asignación del valor anterior
const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins;
};

let myMoneyBox = moneyBox()

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);