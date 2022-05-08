console.log('string + boolean', typeof('string' + true), 'string' + true);
console.log('string + number', typeof('string' + 23), 'string' + 23);
console.log('number + boolean', typeof(35 + false), 35 + false);

console.log('string * boolean', typeof('string' * true), 'string' * true);
console.log('string * number', typeof('string' * 23), 'string' * 23);
console.log('number * boolean', typeof(35 * false), 35 * false);

console.log('string / boolean', typeof('string' / true), 'string' / true);
console.log('string / number', typeof('string' / 23), 'string' / 23);
console.log('number / boolean', typeof(35 / false), 35 / false, 35 / true);

console.log('explicit conversion to String', String(56), String(true));
console.log('explicit conversion to Number', Number('string'), Number(true));
console.log('explicit conversion to Boolean', Boolean('string'), Boolean(0));

// There are 8 basic data types in JavaScript.
//
//     number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
//     bigint is for integer numbers of arbitrary length.
//     string for strings. A string may have zero or more characters, there’s no separate single-character type.
//     boolean for true/false.
//     null for unknown values – a standalone type that has a single value null.
//     undefined for unassigned values – a standalone type that has a single value undefined.
//     object for more complex data structures.
//     symbol for unique identifiers.
//     The typeof operator allows us to see which type is stored in a variable.
//
//     Usually used as typeof x, but typeof(x) is also possible.
//     Returns a string with the name of the type, like "string".
//     For null returns "object" – this is an error in the language, it’s not actually an object.

// Numeric Conversion – Occurs in math operations. Can be performed with Number(value).
//
//     The conversion follows the rules:
//
//     Value	Becomes…
// undefined	NaN
// null	0
// true / false	1 / 0
// string	The string is read “as is”, whitespaces from both sides are ignored. An empty string becomes 0. An error gives NaN.