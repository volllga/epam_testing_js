let car = {
    color: 'black',
    mileage: 65.676,
    'parking sensors': true,
    'registration date': '27-7-2017',
    power: function (num) {
        console.log('Engine power', num)},
    options: ['Central Locking', 'Climate Control', 'Radio', 'Electric Windows']
}
car.color = 'green';
car.power(250);
console.log(car);
console.log(car.mileage);
console.log(car['parking sensors']);

let warehouse = (apples, pears) => {
    return {
        apples: apples,
        pears: pears
    }
}
let newStock = warehouse( 4);
console.log(newStock.pears);


let terminal = (name) => {
    if(name) {
        console.log(('hello ' + name + '!'));
    } else {
        console.log(('hello!' ));
    }
}
terminal();

let type = (arg) => {
    console.log(typeof(arg));
}

type(true);

function prime(num) {
    if (num === 0) {
        return 'The number should be greater than zero!';
    } else if (typeof(num) !== 'number') {
        return num + ' is not a number!';
    } else {
        for(let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
    }
    return true;
}
console.log(prime(true));