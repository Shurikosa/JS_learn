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

