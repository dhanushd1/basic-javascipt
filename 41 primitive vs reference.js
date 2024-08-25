//primitive types
//1.number
//2.string
//3.boolean
//4.symbol
//5.undefined,null

//reference types
//1.object
//2.array
//3.function

// let x = 10;

// let y = x;

// x=20


//reference

// let x={
//     value:10
// };
// let y=x;

// x.value=20;

let cartobj={
    value:12,
};

function updatecart(cart){
    cart.value++;
}

updatecart (cartobj);
console.log("carts avaliable",cartobj);

for ( let key in user)
    console.log(key,user[key]);

for ( let key in user)
console.log(key,user[key]);

for ( let key of Object.key (user))
console.log(key,user[key]);