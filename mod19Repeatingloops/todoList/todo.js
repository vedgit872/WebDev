let value = prompt("what do you want to do");
console.log(value);
let arr = [];
while (true) {
    if (value === 'new') {
        let todo = prompt("what do you want to add in list");
        arr.push(todo);
        console.log(`${arr[arr.length - 1]} added in the list`);
    }
    else if (value === 'delete') {
        let idx = prompt("what do you want to add in list");
        if (!Number.isNaN(parseInt(idx))) {
            idx = arr.splice(idx, 1);
            console.log(`${idx} deleted in the list`);
        }
    }
    else if (value === 'print') {
        console.log(`************************************************`);
        for (let i = 0; i < arr.length; i++) {
            console.log(`${i} : ${arr[i]}`);
        }
        console.log(`************************************************`);
    }
    else if (value === 'quit') {
        console.log('You quit the app');
        break;
    }
    value = prompt("what do you want to do");
}