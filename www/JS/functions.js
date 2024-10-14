const globalMessage = 'Hello dear';

function logMessage(message, count = 1){//  визначений параметр = параматр за замовчуванням
                                                // при виклику метода без вхідного параметру,
                                                // викличеться значення по замовчуванню
    const doSomeLogicWithMessage = `((${message}))`;
    for (let i = 0; i < count; i++) {
        console.log(doSomeLogicWithMessage);
    }
}

logMessage(globalMessage);// тут спрацює параметр за замовчуванням (1)

function getSomeMessage(name){
    if(!name) return;// цей вираз перевіряє валідність вхідного параметра. Якщо він не коректний - повертає: undefined
    return `Hello dear ${name}`;
}

function logArguments(){
    console.log(arguments);
}
logArguments('hello', 233, true);// зверни увагу - в самому меоді відсутні вхідні поля

// при створенні змінної її можна ініціалізувати викликом методу:
const logHello = function () {
    console.log('Hello');
}
// така змінна викликається як метод
logHello();

// варіант №2
const logHello2  = () => {
  console.log('heelo from 2')
}
logHello2()

const sum = (a, b) => a + b; // скорочення виразу. Те саме що - return a + b

//метод можена викликати без відкривання дужок - ()
console.log(sum) // консоль покаже вміст методу -  а саме: (a, b) => a + b

// дозволяється переприсвоювання меотодів
const fn1 = () => {
    return 'hello from fn1';
}

const fn2 = fn1;
console.log(fn2());// fn2 матиме поведінку так само як fn1

// колбек методи працюють як методи з методами в параметрах котрі можна викликати відповідно в методі
const fn3 = () => console.log('before');
const fn4 = () => console.log('after');

const printMessage = (actionBefore, actionAfter) => {
    actionBefore();
    console.log('hello');
    actionAfter();
}
printMessage(fn3, fn4)