// 1) JavaScript Program To Print Hello World
{
    let a = "Heelo wolde"
    console.log(a);

}
// 2) JavaScript Program to Add Two Numbers


{
    let a = 10;
    let b = 30;
    let c = a + b;

    console.log(c);
}

// 3) JavaScript Program to Find the Square Root


{
    let a = Math.sqrt(50)
    console.log(a);

}

// 4) JavaScript Program to Calculate the Area of a Triangle
{
    let h = 20;
    let b = 10;
    let c = h * b / 2;

    console.log(c);

}

// 5) JavaScript Program to Swap Two Variables
{
    let x = 10;
    let y = 20;
    let z = 30;

    x = y;
    y = z;
    z = x;

    console.log(x);

}

// 6) JavaScript Program to Solve Quadratic Equation
{

}
// 7) JavaScript Program to Convert Kilometres to Miles
{
    let Kilometres = 5
    let Miles = Kilometres * 0.62

    console.log(Miles);
}

// // 8) Javascript Program to Convert Celsius to Fahrenheit

{
    let Celsius = 5
    let Fahrenheit = Celsius * 1.8 + 32

    console.log(Fahrenheit);

}
// 9) Javascript Program to Generate a Random Number

{

    let Randome = Math.random() * 1000

    console.log(Randome);


}

// 10)Javascript Program to Check if a number is Positive, Negative, or Zero

let number = -10

if (number < 0) {
    console.log("Negative");

}
else if (number > 0) {
    console.log("Positive");

}
else {
    console.log("Zero");

}

// 11) Javascript Program to Check if a Number is Odd or Even


{
    let num = 11;

    if (num % 2 == 0) {
        console.log("odd");

    }
    else {
        console.log("Even");

    }
}


// 12)JavaScript Program to Find the Largest Among Three Numbers

a = 1000
b = 5000
c = 3000
{
    if (a > b && a > c) {
        console.log("a is the largest number");

    }
    else if (b > a && b > c) {
        console.log("b is the largest number");

    }
    else {
        console.log("c is the largest number");

    }
}

// 13)JavaScript Program to Check Prime Number


{
    let A = 97

    if (A % 2 == 0 || A % 3 == 0 || A % 4 == 0 || A % 5 == 0 || A % 6 == 0 || A % 7 == 0 || A % 8 == 0 || A % 9 == 0 || A % 10 == 0) {
        console.log("not");

    }
    else {
        console.log("Prime Number");

    }
}

// 14)JavaScript Program to Print All Prime Numbers in an Interval
{

    let A;

    for (let A = 1; A <= 100; A++) {
        if (A % 2 == 0 || A % 3 == 0 || A % 4 == 0 || A % 5 == 0 || A % 6 == 0 || A % 7 == 0 || A % 8 == 0 || A % 9 == 0 || A % 10 == 0) {
            console.log();
        }
        else {
            console.log(A);

        }


    }



}


// 15)JavaScript Program to Find the Factorial of a Number

{

    let num = 5;
    let fact = 1;

    for (let i = 1; i <= num; i++) {
        fact *= i
    }

    console.log(fact);
}


// 16)JavaScript Program to Display the Multiplication Table
{

    let num = 5
    let Table
    {
        for (let i = 1; i <= 10; i++) {
            Table = i * num
            console.log(Table);

        }
    }

}

// 17)JavaScript Program to Print the Fibonacci Sequence


{
    let number = 10;
    let n1 = 0;
    let n2 = 1;
    let next;

    for (let i = 0; i <= number; i++) {
        console.log(n1);
        next = n1 + n2;
        n1 = n2;
        n2 = next;
    }
}


// 20)JavaScript Program to Make a Simple Calculator

{

    let opt = `-`;
    let num1 = 10;
    let num2 = 20;

    let regulte;

    if (opt == `+`) {
        regulte = num1 + num2
    }
    else if (opt == `-`) {
        regulte = num1 - num2
    }
    else if (opt == `*`) {
        regulte = num1 * num2
    }
    else {
        regulte = num1 / num2
    }
    console.log(regulte);

}


// 21)JavaScript Program to Find the Sum of Natural Numbers

{
    let num = 10

    let sum = 0;

    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    console.log(sum);

}
// 22)JavaScript Program to Check if the Numbers Have Same Last Digit
{


    const a = 30
    const b = 20
    const c = 30

    const result1 = a % 10;
    const result2 = b % 10;
    const result3 = c % 10;

    if (result1 == result2 && result1 == result3) {
        console.log(` have the same last digit.`);
    }
    else {
        console.log(` have different last digit.`);
    }
}


// 26)JavaScript Program to Find Sum of Natural Numbers Using Recursion



{

    function Sum(n) {
        if (n !== 0)
            return n + Sum(n - 1);
        else
            return n;
    }


    const n = 5;
    console.log(Sum(n));

}


// 27)JavaScript Program to Guess a Random Number
{
    let random = Math.random() * 50
    console.log(random);

}

// 28)JavaScript Program to Shuffle Deck of Cards



// 29)JavaScript Program to Display Fibonacci Sequence Using Recursion
{

    let num;
    function fibonacci(num) {
        if (num < 2) {
            return num;
        }
        else {
            return fibonacci(num - 1) + fibonacci(num - 2);
        }
    }

    const nTerms = 10;

    for (let i = 0; i < nTerms; i++) {
        console.log(fibonacci(i));
    }

}


// 30)JavaScript Program to Find Factorial of Number Using Recursion


{
    function factorial(x) {

        if (x == 0) {
            return 1;
        }

        else {
            return x * factorial(x - 1);
        }
    }

    const num = 5;


    const result = factorial(num);
    console.log(result)

}


// 31)JavaScript Program to Convert Decimal to Binary



{
    const number = 100
    const regulte = number.toString(2);

    console.log(regulte);

}


// 32)JavaScript Program to Find ASCII Value of Character
{
    const String = 'k';
    const regulte = String.charCodeAt(0);

    console.log(regulte);

}

// 33)JavaScript Program to Check Whether a String is Palindrome or Not



{
    const String = 'ravi chavda';

    const words = String.split(" ");

    words.sort();

    for (const element of words) {
        console.log(element);

    }

}

// 34)JavaScript Program to Sort Words in Alphabetical Order



// 35)JavaScript Program to Replace Characters of a String
{
    let String = 'mr red is red house  and red car';

    let text = String.replace('red', 'green');

    console.log(text);

}


// 36)JavaScript Program to Reverse a String
{

    let string = 'ravi'
    let string1 = string.split("")
    let String2 = string1.reverse()
    let String3 = String2.join(" ")

    console.log(String3);
}


// 37)JavaScript Program to Create Objects in Different Ways
{
    const person = {
        name: "meet",
        age: 19

    }
    console.log(typeof person);

    const person1 = new Object({
        name: "meet",
        age: 19

    })
    console.log(typeof person1);
}

// 38)JavaScript Program to Check the Number of Occurrences of a Character in
// the String


// 39)JavaScript Program to Convert the First Letter of a String into UpperCase

{
    function capitalizeFirstLetter(str) {


        const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

        return capitalized;
    }


    const string = 'ravi';

    const result = capitalizeFirstLetter(string);

    console.log(result);

}


// 40)JavaScript Program to Count the Number of Vowels in a String

// {
//     function countVowel(str) { 


//         const count = str.match(/[aeiou]/gi).length;0   


//         return count;
//     }


//     const string = 'ravi';


//     console.log(result);

// }


// 41)JavaScript Program to Remove a Property from an Object

{
    const student = {
        name: 'John',
        age: 20,

        score: {
            maths: 90,
            science: 80
        }
    };



    delete student['score'];

    console.log(student);

}

// 42)JavaScript Program to Check Whether a String Starts and Ends With Certain
// Characters

{
    function checkString(str) {

        if (str.startsWith('S') && str.endsWith('G')) {
            console.log('The string starts with S and ends with G');
        }


        else {
            console.log('The string does not start with S and does not end with G');
        }
    }

    let string = 'song';
    checkString(string);
}


// 43)JavaScript Program to Check if a Key Exists in an Object

{
    const person = {

        name: 'John'
    }
    const hasKey = 'name' in person;

    if (hasKey) {
        console.log('The key exists.');
    }
    else {
        console.log('The key does not exist.');
    }
}


// 44)JavaScript Program to Clone a JS Object
{
    let parsone = {
        name: 'ravi',
        age: 20
    }

    let clonepersone = Object.assign({}, parsone)

    console.log(clonepersone);

    clonepersone.name = 'Peter';

    console.log(clonepersone.name);
    console.log(parsone.name);


}

// 45)JavaScript Program to Loop Through an Object


// 46)JavaScript Program to Merge Property of Two Objects

{

    const person = {
        name: 'Jack',
        age: 26
    }

    const student = {
        gender: 'male'
    }

    const newObj = Object.assign(person, student);

    console.log(newObj);

}


// 47)JavaScript Program to Count the Number of Keys/Properties in an Object
{
    const student = {
        name: 'John',
        age: 20,
    };

    const result = Object.keys(student).length;

    console.log(result);
}

// 48)JavaScript Program to Add Key/Value Pair to an Object
{
    let parsone = {

        name: 'ravi'

    }
    parsone.sarname = "chavda"

    console.log(parsone);


}


// 49)JavaScript Program to Replace All Occurrences of a String

{
    const string = 'Mr red has a red house and a red car';

    const result = string.split('red').join('blue');

    console.log(result);


}


// 50)JavaScript Program to Create Multiline Strings


{
    const message = `This is a long message
that spans across multiple lines`

    console.log(message);
}

// 51)JavaScript Program to Format Numbers as Currency Strings
{
    const number = 1234.5678;

    const result = '$ ' + number.toFixed(2);

    console.log(result);
}

// 51. JavaScript Program to Format Numbers as Currency Strings

{
    const number = 5648.1258;

    const result = '$' + number.toFixed(2);
    console.log(result)
}

// 52. JavaScript Program to Generate Random String

{
    const randomString = Math.random().toString(36).substring(2, 7);
    console.log(randomString)
}

// 53. JavaScript Program to Check if a String Starts With Another String

{
    const string = 'This is javascript';
    const start = "This"

    if (string.startsWith(start)) {
        console.log("true")
    }
    else {
        console.log("false")
    }
}

// 54. JavaScript Program to Trim a String

{
    const string = '                  This is apple                ';
    console.log(string)
    const trim = string.trim();
    console.log(trim)
}

// 55. JavaScript Program to Convert Objects to Strings

{
    const person = {
        name: 'Jack',
        age: 27
    }

    const str = JSON.stringify(person);
    console.log(str)
}

// 56. JavaScript Program to Check Whether a String Contains a Substring

{
    let string = "this is apple";
    let addStr = "banana";

    if (string.includes(addStr)) {
        console.log("The string contain")
    }
    else {
        console.log("the string does not contain")
    }
}

// 57. JavaScript Program to Compare Two Strings

{
    let string1 = "kiwi";
    let string2 = "apple";

    if (string1 === string2) {
        console.log("string are equal")
    }
    else {
        console.log("String are not equal")
    }
}

// 58. JavaScript Program to Encode a String to Base64
// btoa() method is used to convert the string to Base64.
// atob() method is used to convert the Base64 to a string
{
    const str = "This is string method ";

    const result = window.btoa(str);
    console.log(result)

    const result1 = window.atob(result);
    console.log(result1)
}

// 59. JavaScript Program to Replace all Instances of a Character in a String

{
    let string = "this is apple and that is apple";

    console.log(string.replaceAll("apple", "kiwi"))
}

// 60. JavaScript Program to Replace All Line Breaks with

{
    let str = `this is 
    line break 
    string `
    let result = str.split("\n").join("<br/>");
    console.log(result)
}

// 61. JavaScript Program to Display Date and Time

{
    let date = new Date();
    let getdate = date.getDate();
    console.log(getdate)
    let gettime = date.getTime();
    console.log(gettime)
}


// 62. JavaScript Program to Check Leap Year

{
    let year = 2000;

    if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) {
        console.log("is leap year")
    } else {
        console.log("is not leap year")
    }
}

// 63. JavaScript Program to Format the Date

{
    let currentDate = new Date();
    let getyear = currentDate.getFullYear();
    let getdate = currentDate.getDate();
    let getmonth = currentDate.getMonth() + 1;
    console.log(currentDate)

    console.log(`${getdate}-${getmonth}-${getyear}`)

}

// 64. Javascript Program to Display Current Date

{
    let currentDate = new Date();
    let date = currentDate.toDateString();
    console.log(date)
}

// 65. JavaScript Program to Compare The Value of Two Dates

{
    let date1 = new Date();
    let date2 = new Date();

    let compare1 = date1 < date2
    let compare2 = date1 <= date2
    let compare3 = date1 > date2
    let compare4 = date1 >= date2

    console.log(compare1)
    console.log(compare2)
    console.log(compare3)
    console.log(compare4)
}

// 66)JavaScript Program to Create Countdown Timer
{

}

// 67)JavaScript Program to Remove Specific Item From an Array
{


    function removeItemFromArray(array, n) {
        const newArray = [];

        for (let i = 0; i < array.length; i++) {
            if (array[i] !== n) {
                newArray.push(array[i]);
            }
        }
        return newArray;
    }

    const result = removeItemFromArray([1, 2, 3, 4, 5], 2);

    console.log(result);
}


// 68)JavaScript Program to Check if An Array Contains a Specified Value
{

    let arr = ['my', 'name', 'is', 'ravi']

    const hasValue = arr.includes('ravi');

    if (hasValue) {
        console.log("");

    }





}

// 69)JavaScript Program to Insert Item in an Array
{
    // program to insert an item at a specific index into an array

    function insertElement() {
        let array = [1, 2, 3, 4, 5];


        let index = 3;


        let element = 8;

        array.splice(index, 0, element);
        console.log(array);
    }

    insertElement();
}




// 73)JavaScript Program to Add Element to Start of an Array
{


    function addElement(arr) {


        arr.unshift(4);

        console.log(arr);
    }

    const array = [1, 2, 3];


    addElement(array);
}


// 74)JavaScript Program to Remove Duplicates From Array
{




    function getUnique(arr) {

        let uniqueArr = [];


        for (let i of arr) {
            if (uniqueArr.indexOf(i) === -1) {
                uniqueArr.push(i);
            }
        }
        console.log(uniqueArr);
    }

    const array = [1, 2, 3, 2, 3];


    getUnique(array);


}

// 75)JavaScript Program to Merge Two Arrays and Remove Duplicate Items
{


    function getUniqueAfterMerge(arr1, arr2) {


        let arr = [...arr1, ...arr2];


        let uniqueArr = [...new Set(arr)];

        console.log(uniqueArr);
    }

    const array1 = [1, 2, 3];
    const array2 = [2, 3, 5]

    getUniqueAfterMerge(array1, array2);
}



// 76)JavaScript Program to Sort Array of Objects by Property Values
{
    function compareAge(a, b) {
        return a.age - b.age;
    }
    let student = [{ name: 'ravi', age: 20 }, { name: 'meet', age: 18 }, { name: 'ram', age: 17 }]

    console.log(student.sort(compareAge));

}

// 77)JavaScript Program to Create Two Dimensional Array
{


    function twoDimensionArray(a, b) {
        let arr = [];


        for (let i = 0; i < a; i++) {
            for (let j = 0; j < b; j++) {
                arr[i] = [];
            }
        }


        for (let i = 0; i < a; i++) {
            for (let j = 0; j < b; j++) {
                arr[i][j] = j;
            }
        }
        return arr;
    }

    const x = 2;
    const y = 3;

    const result = twoDimensionArray(x, y);
    console.log(result);



}




// 78)JavaScript Program to Extract Given Property Values from Objects as Array


{


    function extractValue(arr, prop) {


        let extractedValue = arr.map(item => item[prop]);

        return extractedValue;

    }

    const objArray = [{ a: 1, b: 2 }, { a: 4, b: 5 }, { a: 8, b: 9 }];

    
    const result = extractValue(objArray, 'a');
    console.log(result);
}

// 79)JavaScript Program to Compare Elements of Two Arrays


// 80)JavaScript Program to Get Random Item From an Array
{


    function getRandomItem(arr) {


        const randomIndex = Math.floor(Math.random() * arr.length);

        const item = arr[randomIndex];

        return item;
    }

    const array = [1, 'hello', 5, 8];

    const result = getRandomItem(array);
    console.log(result);
}


// 81)JavaScript Program To Perform Intersection Between Two Arrays

{

    function performIntersection(arr1, arr2) {

        const intersectionResult = arr1.filter(x => arr2.indexOf(x) !== -1);

        return intersectionResult;

    }

    const array1 = [1, 2, 3, 5, 9];
    const array2 = [1, 3, 5, 8];

    const result = performIntersection(array1, array2);
    console.log(result);



}

// 82. JavaScript Program to Split Array into Smaller Chunks

{

    function splitIntoChunk(arr, chunk) {

        for (i = 0; i < arr.length; i += chunk) {

            let tempArray;
            tempArray = arr.slice(i, i + chunk);
            console.log(tempArray);
        }

    }

    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const chunk = 2;
    splitIntoChunk(array, chunk);
}

// 83. JavaScript Program to Include a JS file in Another JS file

// 84. JavaScript Program to Get File Extension

{

    function getFileExtension(filename) {
        const extension = filename.split('.').pop();
        return extension;
    }

    const result1 = getFileExtension('module.js')
    console.log(result1)

    const result2 = getFileExtension('module.txt');
    console.log(result2)
}

// 85. JavaScript Program To Check If A Variable Is undefined or null

{
    let number = "hello";
    let number2 = null;


    if (number2 == null) {
        console.log("variable in undefind or null")
    }
    else {
        console.log("The variable is neither undefined nor null")
    }
}

// 86. JavaScript Program to Set a Default Parameter Value For a Function

{
    function sum(x = 3, y = 5) {
        return x + y;
    }
    console.log(sum(5, 16))
    console.log(sum(7))
    console.log(sum())
}

// 87. JavaScript Program to Illustrate Different Set Operations

{

    function union(a, b) {
        let unionSet = new Set();
        for (let i of b) {
            unionSet.add(i)
        }
        return unionSet
    }

    const setA = new Set(['apple', 'mango', 'orange']);
    const setB = new Set(['grapes', 'apple', 'banana']);

    const result = union(setA, setB);
    console.log(result)
}

// 88. Javascript Program to Generate a Random Number Between Two Numbers

{
    let min = 50;
    let max = 100

    let result = Math.trunc(Math.random() * (max - min + 1) + min);
    console.log(result)
}

// 89. JavaScript Program To Get The Current URL

{
    const url1 = window.location.href;
    const url2 = document.URL;
    console.log(url1)
    console.log(url2)
}

// 90. JavaScript Program to Validate An Email Address

{
    const email = "helloworld@gmail.com"
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regex.test(email)) {
        console.log("The email address is valid")
    }
    else {
        console.log("The email address is not valid")
    }
}

// 91. JavaScript Program to Check If a Variable is of Function Type

{
    const count = true;
    const x = function () {
        console.log('hello')
    };


    function testVariable(variable) {

        if (variable instanceof Function) {
            console.log('The variable is of function type');
        }
        else {
            console.log('The variable is not of function type');
        }
    }

    testVariable(count);
    testVariable(x);
}

// 92. JavaScript Program To Work With Constants

{
    const a = 5;
    console.log(a);

    {
        const a = 50;
        console.log(a);
    }
    console.log(a);

    const arr = ['work', 'exercise', 'eat'];
    console.log(arr);

    arr[3] = 'hello';
    console.log(arr);
}

// 93.JavaScript Program to Pass Parameter to a setTimeout() Function

{
    function name() {
        console.log("hello world")
    }
    // setTimeout(name, 2000);
    console.log("This message first shown")
}

// 95. JavaScript Program to Perform Function Overloading

{
    function sum() {

        if (arguments.length == 0) {
            console.log('You have not passed any argument');
        }

        else if (arguments.length == 1) {
            console.log('Pass at least two arguments');
        }

        else {
            let result = 0;
            let length = arguments.length;

            for (i = 0; i < length; i++) {
                result = result + arguments[i];
            }
            console.log(result);
        }
    }

    sum();
    sum(5);
    sum(5, 9);
    sum(1, 2, 3, 4, 5, 6, 7, 8, 9);
}

// 96. JavaScript Program to Implement a Stack

{

    class Stack {

        constructor() {
            this.items = [];
        }

        add(element) {
            return this.items.push(element)
        }

        remove() {
            if (this.items.length > 0) {
                return this.items.pop();
            }
        }

        peek() {
            return this.items[this.items.length - 1]
        }

        isEmpty() {
            return this.items.length == 0;
        }

        size() {
            return this.items.length;
        }

        clear() {
            this.items = [];
        }
    }

    let stack = new Stack();
    stack.add(1)
    stack.add(2)
    stack.add(5)
    stack.add(6)
    console.log(stack.items)

    stack.remove();
    console.log(stack.items)

    stack.size();
    console.log(stack.size())

    stack.peek();
    console.log(stack.peek())

    stack.add(50)
    console.log(stack.items)

    stack.isEmpty()
    console.log(stack.isEmpty())

    // stack.clear();
    // console.log(stack.clear())
    // console.log(stack.items)
}

// 97. JavaScript Program to Implement a Queue

{

    class Queue {
        constructor() {
            this.item = {};
            this.head = 0;
            this.tail = 0;
        }

        add(element) {
            this.item[this.tail] = element;
            this.tailIndex++;
        }

        delete() {
            let remove = this.item[this.head];
            delete this.item[this.head];
            this.head++;
            return remove
        }

        clear() {
            this.item = {};
        }

    }

    let queue = new Queue();
    queue.add(5);


    console.log("Queue after adding items: ");
    console.log(queue.item);

    queue.delete();
    console.log(queue.item)
    queue.add(50);
    console.log(queue.item);

    queue.clear();
    console.log(queue.item)

}

// 98. JavaScript Program to Check if a Number is Float or Integer

{
    let number = 20.22;

    if (Number.isInteger(number)) {
        console.log("Number is integer")
    }
    else {
        console.log("Number is float")
    }

}

// 99. JavaScript Program to Pass a Function as Parameter

{
    function name1(a) {
        return a;
    }

    console.log(name1("JavaScript is Awesome!!"))
}

// 100. JavaScript Program to Get the Dimensions of an Image

{
    // const img = new Image();

    // img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s";

    // img.onload = function(){
    //     console.log("width " + this.width)
    //     console.log("height " + this.height)
    // }
}

// 101. JavaScript Program to Remove All Whitespaces From a Text

{
    let text = "This                    is                 Javscript   !!!"
    console.log(text)

    let reuslt = text.split(' ').join('');
    console.log(reuslt)
}

// 102. JavaScript Program to Write to Console

{
    console.log(8);

    console.log('hello');

    const x = 'hello';
    console.log(x);
}

// 103. JavaScript Program to Convert Date to Number
// {
//     const d1 = new Date();
//     console.log(d1)
//     const result = d1.gettime();
//     console.log(result);
// }
