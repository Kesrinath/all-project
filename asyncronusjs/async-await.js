function placeOrder(food){
return new Promise(function(resolve,reject){
    console.log('your order for ${food} is placed..')
    resolve(food);
});
}

function paymentOf(food){
return new Promise(function(resolve,reject){
    console.log("your order payment is done for ${food} ...");
    resolve(food);
});
}
function deliveryOrder(food){
return new Promise(function(resolve,reject){
    console.log("your order for $(food) is delivered..")
    resolve(food);
});
}
function enjoyfood(food){
return new Promise(function(resolve,reject){
    console.log("enjoy your $(food) ..")
    resolve(food);
});
}

async function f1 (food){
 let a = await placeOrder(food);
 let b = await paymentOf(a);
 let c = await deliveryOrder(b);
 enjoyfood();
 return "krati";
}

f1("pizza");
 /*let z = f1("pizza");
 z.then(function(value){
    console.log(z);
 });*/