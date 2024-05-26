// Место для первой задачи
function firstTask() {
    // Пишем решение вот тут
    for (let i = 5; i <= 10; i++) {
        console.log(i);
    }
}

firstTask();

// Место для второй задачи
function secondTask() {
    // Пишем решение вот тут
    for (let i = 20; i >= 10; i--) {
        if (i === 13) {
            break;
        }
        console.log(i);
    }
}

secondTask();

// Место для третьей задачи
function thirdTask() {
    // Пишем решение вот тут
    for (let i = 1; i <= 5; i++) {
        console.log(i * 2);
    }

}

thirdTask();
// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }



function fourthTask() {
    // Пишем решение вот тут
    let i = 1;
    while (i <= 15) {
        i++;
        if (i % 2 === 0) {
            continue;
        } else {
            console.log(i);
        }

    }
}

fourthTask();
// Место для пятой задачи

function fifthTask() {
    const arrayOfNumbers = [];

    // Пишем решение вот тут


    for (let i = 5; i <= 10; i++) {
        arrayOfNumbers[i - 5] = i;
    }
    // Не трогаем
    return arrayOfNumbers;
}
fifthTask();