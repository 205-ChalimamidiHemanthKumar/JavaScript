// There are two syntaxes for creating an empty arry:
let arr = [];
//Almost all the time,the second syntax is used. we can supply initial elements in the brackets:
//We can get an Element by its number in square brackets:
let fruits = ["Pine", "Banana", "Cherry"];
console.log( fruits[0] ); //Pine
console.log( fruits[1] ); //Banana
console.log( fruits[2] ); //Cherry

//We can replace an element:
 
fruits[2] = 'Pear';
console.log("The Third element is", fruits[2]); // now ["Pine", "Banana", "Pear"]

//..Or add a new one to the array:

fruits[3] = 'Lemon';
console.log("The Second element after modify", fruits[3]); // now ["pine", "Banana", "Pear"]

// The total count of the elements in the array is its length:
console.log("The length of Array", fruits.length ); // 3