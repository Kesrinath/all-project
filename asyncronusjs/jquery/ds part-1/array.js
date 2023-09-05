let arr = [10,20,33,43,57,60,];

let newArray = arr.filter(element => {
    return element%2!==0;
});
console.log(newArray);

let reducevalue = arr.reduce(function (value, element) {
    return value + element;
},0);
console.log(reducevalue);