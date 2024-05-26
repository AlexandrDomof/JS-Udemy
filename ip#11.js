const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (arr.length === 0) {
        return 'Семья пуста'
    }
    else {
        let answer = 'Семья состоит из:';
        for (let i in arr) {
            answer += ` ${arr[i]}`;
        }
        return answer;
    }
}

console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    for (let i in arr) {
        console.log(arr[i].toLowerCase());
    }
}

standardizeStrings(favoriteCities);