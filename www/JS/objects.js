//є два варіанта створення об'єкту
const firstEmptyObject = {};//пустий об'єкт
const secondEmptyObject = new Object();//пустий об'єкт

// загалом "об'єкт" дуже нагадує асоціативний масив в PHP
const user2 = {
    name: 'John',
    age: 30,
    'registration date' : '2020-01-01', //якщо в назві ключа є пробіли або _ , необхідно використати лапки
    // може містити в собі інший об'єкт
    addresss: {
        city: 'New York',
        zipCode: 12345,
    },
    // може містити масив
    skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Java'],
    // може містити функцію
    sayHello: function () {
        console.log('Hello');
    }
};

console.log(user2["registration date"]);// так можна звертатися до значення об'єкту
console.log(user2.skills[1]);// так можна звертатися до значення масиву
console.log(user2.name);

user2.sayHello();

//--------------------------------
// додавання властивостей до об'єкту, за межами об'єкту
const user3 = {}

user3.name = 'John';
user3.age = 30;
user3['registration date'] = '2020-01-01';
user3.addresss = {
    city: 'New York',
    zipCode: 12345,
};
user3.skills = ['HTML', 'CSS', 'JavaScript', 'PHP', 'Java'];
user3.sayHello = function () {
    console.log('Hello');
};

console.log(user3);


//і такий варіант
const userName = 'John';
const userAge = 30;
const userRegistrationDate = '2020-01-01';

const user4 = {userName, userAge, userRegistrationDate};
console.log(user4);
console.log('isDeveloper' in user4);//перевірка наявності поля

//--------------------------------
const propName = prompt('Enter property name');
const propValue = prompt(`Witch value enter to property ${propName}?`);

const object = {
    [propName]: propValue // [ключ]: [значення]. Якщо в якості ключа виступає вже існуюча змінна,
                            // обов'язково використовувати квадратні дужки
};
console.log(object);
