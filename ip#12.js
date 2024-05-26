const someString = 'This is some strange string';

function reverse(str) {
    let new_str = '';

    if (typeof (str) !== 'string') return 'Ошибка!'
    for (let i = str.length - 1; i >= 0; i--) {
        new_str += str[i];
    }

    return new_str;
}

reverse(someString)

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let answer = "Доступные валюты:\n"
    if (arr.length === 0 || arr.length === 1 && arr[0] === missingCurr) return 'Нет доступных валют';


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === missingCurr) continue;
        answer += (arr[i] + '\n');
    }
    return answer;
}

availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')