// Место для первой задачи
function getTimeFromMinutes(num) {
    if (num < 0 || isNaN(num) || !Number.isInteger(num)) {
        return "Ошибка, проверьте данные"
    }
    else {
        let hours = parseInt(num / 60);
        let minutes = num % 60;
        let answer = "Это " + hours

        if (hours === 0) {
            answer += " часов и ";
        }
        if (hours === 1) {
            answer += " час и ";
        }
        if (hours === 2 || hours === 3 || hours === 4) {
            answer += " часа и ";
        }
        if (hours === 5 || hours === 6 || hours === 7 || hours === 8 || hours === 9 || hours === 10) {
            answer += " часов и ";
        }

        if (minutes === 1) {
            answer += minutes + " минута"
        }
        else if (minutes === 2 || minutes === 3 || minutes === 4) {
            answer += minutes + " минуты"
        }
        else {
            answer += minutes + " минут"
        }

        return answer
    }
}

// Место для второй задачи
function findMaxNumber(a, b, c, d) {
    if (a === null || b === null || c === null || d === null) {
        return 0;
    }
    if (typeof (a) !== 'number' || typeof (b) !== 'number' || typeof (c) !== 'number' || typeof (d) !== 'number') {
        return 0;
    }


    return Math.max(a, b, c, d);

}