function placeOrder(food){
return new Promise(function(resolve,reject){
    console.log('your order for ' + food, 'is placed..')
    resolve(food);
});
}

function paymentOf(food){
return new Promise(function(resolve,reject){
    console.log("your order payment is done for " + food ,"...");
    resolve(food);
});
}
function deliveryOrder(food){
return new Promise(function(resolve,reject){
    console.log("your order for "+ food ," is delivered..")
    resolve(food);
});
}
function enjoyfood(food){
return new Promise(function(resolve,reject){
    console.log(' enjoy your '+ food);
    resolve(food);
});
}

let x = placeOrder("Burger");
//console.log(x);
x.then(function(value){
return value;
}).then(function (value){
let a = paymentOf(value);
return a;
}).then(function (value){
let b = deliveryOrder(value);
return b;
}).then(function (value){
     enjoyfood(value);
   
});
