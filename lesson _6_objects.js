let animal = {
    name: 'animal',
    eyes: 2,
    legs: 4,
    tail: true,
    move() {
        console.log('I move!');
    }
}

let cat = Object.create(animal);
cat.name = 'cat';

cat.move = function () { // говнокод
    animal.move();
    console.log('Cat walks on its toes')
}

cat.move();
console.log(cat.tail);
console.log(cat);
cat.move();
