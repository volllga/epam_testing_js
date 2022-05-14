// 1. Given an array consisting of movie names,
// iterate over the array with the output of the names of each movie to the console
let movies = [{
    "title": "The Shawshank Redemption",
    "duration": "PT142M",
    "actors": [ "Tim Robbins", "Morgan Freeman", "Bob Gunton" ],
    "ratings": [],
    "watchlist": [15291, 51417, 62289, 6146, 71389, 93707]
},
    {
        "title": "The Godfather",
        "duration": "PT175M",
        "actors": [ "Marlon Brando", "Al Pacino", "James Caan" ],
        "ratings": [],
        "watchlist": [62289, 66380, 34139, 6146]
    },
    {
        "title": "The Dark Knight",
        "duration": "PT152M",
        "actors": [ "Christian Bale", "Heath Ledger", "Aaron Eckhart" ],
        "ratings": [],
        "watchlist": [51417, 62289, 6146, 71389, 7001]
    },
    {
        "title": "Pulp Fiction",
        "duration": "PT154M",
        "actors": [ "John Travolta", "Uma Thurman", "Samuel L. Jackson" ],
        "ratings": [],
        "watchlist": [7001, 9250, 34139, 6146]
    },
    {
        "title": "Schindler's List",
        "duration": "PT195M",
        "actors": ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],
        "watchlist": [15291, 51417, 7001, 9250, 93707]
    }];

// for(let movie in movies) {
//     console.log(movies[movie].title);
// }
movies.forEach(function (item) {
    console.log(item.title);
});

// 2. Given an array of car manufacturers, convert the array to a string and back to an array
let manufacturers = ['BMW', 'Audio', 'Porsche'];
let str  = manufacturers.join(' ');
console.log(str);
let arr_1 = str.split(' ');
console.log(arr_1);

// 3. Given an array of the names of your friends, add the words hello to each element of the array
let friends = ['Ira', 'Valera', 'Vitaliy'];
// for(let friend in friends) {
//     friends[friend] = 'Hello, ' + friends[friend];
// }
let helloFriend = [];
friends.forEach(function (item) {
    helloFriend.push('Hello, ' + item);
})
console.log(helloFriend);

// 4. Convert numeric array to Boolean
let nums = [34, 0, 4, 12]
// for(let num in nums) {
//     nums[num] = !!nums[num];
// }
const bool = nums.map(num => !! num);
console.log(bool);

// 5. Sort the array [1,6,7,8,3,4,5,6] in descending order
let array = [1,6,7,8,3,4,5,6];
array.sort();
console.log(array);

// 6. Filter array [1,6,7,8,3,4,5,6] by value> 3
const arr_2 = [1,6,7,8,3,4,5,0,6];
let results = arr_2.filter(item => item > 3);
    // if true item is pushed to results and the iteration continues
    // returns empty array if nothing found
console.log(results);

// 7. Write a function that takes two parameters - an array
// and a number and outputs the index of an array element equal to a number
const find = (arr, num) => arr.indexOf(num, arr);
console.log(find(arr_2, 8)); // 3

// 8. Implement a loop that will print the number 'a' until it is less than 10
const count = (num) => {
    while(num < 10) {
        console.log(num);
        num += 1;
    }
}
count(5);

// 9. Implement a loop that prints prime numbers to the console
function prime(num) {
    let x = 2
    while (x <= num) {
        // console.log('x', x);
        let y = 2;
        while (y <= num) {
            // console.log('y', y);
            if (x === y) {
                console.log('prime', x);
            } else if(x % y === 0) {
                break;
            }
            y += 1;
        }
        x += 1;
    }
}

prime(100);

// 10. Implement a loop that prints odd numbers to the console
function odd_even(num, str) {
    if (str === 'even') {
        for (i = 2; i <= num; i += 2) {
            console.log('even', i);
        }
    } else
        if (str === 'odd') {
            for (i = 1; i <= num; i += 2) {
                console.log('odd', i);
            }
        }
    }

odd_even(20, 'odd');


