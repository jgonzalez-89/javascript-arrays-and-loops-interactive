
let newArray = [];
let myNumbers = [23,234,345,4356234,243,43,56,2];

// your code here
let myFunction = (params) => {
    return params *3;
}

newArray.push(myNumbers.map(myFunction));

console.log(newArray);

