//https://javascript.info/prototype-inheritance
let animal = {
    eats: true,
    fur: true,
    eyes: {
        amount: 2,
        color: 'blue'
    },
    legs: 4,
    tail: 'long',
    walk() {
        console.log("Animal walk");
    },
    move() {
        this.walk()
    }
};
let rabbit = {
    __proto__: animal,
    jumps: true,
    tail: 'short'
};

// rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal
console.log(rabbit.eats, rabbit.legs, rabbit.tail);
rabbit.walk();

//Also it may be obvious, but still: there can be only one [[Prototype]].
// An object may not inherit from two others.

//No matter where the method is found: in an object or its prototype.
// In a method call, this is always the object before the dot.


for(let prop in rabbit) {
    let isOwn = rabbit.hasOwnProperty(prop);

    if (isOwn) {
        console.log(`Our: ${prop}`); // Our: jumps
    } else {
        console.log(`Inherited: ${prop}`); // Inherited: eats
    }
}

console.log(rabbit, rabbit.__proto__, animal.isPrototypeOf(rabbit));
rabbit.move()

