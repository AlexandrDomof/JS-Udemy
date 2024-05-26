// Место для первой задачи
function sayHello(name) {
    return "Привет, " + name + "!"
}


// Место для второй задачи
function returnNeighboringNumbers(num) {
    let arr = [num - 1, num, num + 1];
    return arr
}

// Место для третьей задачи
function getMathResult(num, count) {
    let str = ''
    if (count <= 0 || typeof (count) !== 'number') {
        str = num;
    }
    else {
        for (let i = 0; i < count - 1; i++) {
            str += num * (1 + i) + '---';
        }
        str += num * count;
    }
    return str;
}