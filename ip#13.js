const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function shopVolume(width, length, height) {
    return width * length * height
}

function centerVolume(data) {
    let volume = 0;
    let height = data.height;


    for (let item of data.shops) {
        let { width, length } = item;
        volume += shopVolume(width, length, height);
    }
    return volume;
}

function isBudgetEnough(data) {

    let shopBudget = centerVolume(data) * data.moneyPer1m3;
    if (data.budget >= shopBudget) {
        return 'Бюджета достаточно'
    } else {

        return 'Бюджета недостаточно'
    }
}

console.log(isBudgetEnough(shoppingMallData))