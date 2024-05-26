// Место для первой задачи
function calculateVolumeAndArea(num) {

    if (num <= 0 || isNaN(num) || !Number.isInteger(num)) {
        return 'При вычислении произошла ошибка';
    }
    else {
        return 'Объем куба: ' + num * num * num + ', площадь всей поверхности: ' + 6 * num * num;
    }
}

// Место для второй задачи
function getCoupeNumber(num) {
    if (num === 0 || num > 36) {
        return "Таких мест в вагоне не существует";
    }
    else {
        if (num < 0 || isNaN(num) || !Number.isInteger(num)) {
            return "Ошибка. Проверьте правильность введенного номера места"
        }
        else {
            return parseInt((num - 1) / 4) + 1
        }
    }
}