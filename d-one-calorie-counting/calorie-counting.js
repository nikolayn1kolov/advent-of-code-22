var fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    var arr = data.split("\n");
    let currentMaxCalories = 0;
    let currentSum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === '') {
            if (currentMaxCalories < currentSum) {
                currentMaxCalories = currentSum
            }
            currentSum = 0;
            continue;
        }
        currentSum += +arr[i];
    }
    console.log(currentMaxCalories);
});

