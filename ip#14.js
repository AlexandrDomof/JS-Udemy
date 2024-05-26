const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {

    arr.sort();
    let mal3 = Math.trunc((arr.length) / 3);
    let rest = (arr.length) % 3;
    let new_arr = [];
    console.log(arr);



    for (let i = 0; i < mal3; i++) {
        new_arr.push(arr.slice(i * 3, i * 3 + 3))
    }
    if (rest === 0) {
        new_arr.push('Оставшиеся студенты: -');

    } else {
        new_arr.push('Оставшиеся студенты: ' + arr.slice(mal3 * 3, mal3 * 3 + rest).join(", "))
    }

    return new_arr;
}

console.log(sortStudentsByGroups(students));