let number = 1;
const name = "John Williams";//константа
let myName = 'Myname',
    myAge = 35,
    isSomeTrue = true;//змінні можна створювати пачками

console.log("hello" + " " + name + " " + number + "-st");
// типи даних
const strng = 'String';//string
const integer = 35;// number (integer)
const someBoolean = true;// boolean
const doubleOrFloat = 999999999999n;//bigint
const char = Symbol();// symbol (maybe like char in Java)
const something = undefined; // undefined

const user = {
    name: 'some name',
    login: '123',
    pass: 'ocjo09230'
}; // змінна об'єкт

const data = null; // null теж змінна?
const reassignMyAge = myAge + 1;
const message = `${myAge}, ${myAge}!`;//цікавий спосіб конкатенації рядків(можна конкатенувати різні типи даних
                                             //або тут це зветься інтерполяція даних

console.log(message);

console.log(typeof  reassignMyAge);// перевірка типу (типів) змінної

let conversionMyAge = (String(myAge));//явна конвертація даних(бажано робити так)
let conversToNumber = (+'  ')//
console.log(conversToNumber);
alert(message);// варіант виводу даних в браузер( потрібна реакція )
