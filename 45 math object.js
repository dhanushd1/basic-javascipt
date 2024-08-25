console.log(Math.PI);
console.log((Math.abs(-3)));
console.log((Math.ceil(2.5)));
console.log((Math.random()));
// math.random()*(max-min)+min;
console.log(Math.random()*(100-1)+1);

// it takes upto .5
console.log(Math.round(1.5));
console.log(Math.round(1.4));
console.log(Math.round(1.9));

console.log(Math.max(1,4,5,5,53,33));
console.log(Math.min(1,4,5,5,53,33));

// let result=Math.max(12,2,2,3,.3,4,5100,6);
// console.log(result);

// using spread operator

let marks=[23,3,66,77,8,8,100];
let result=Math.max(...marks);
console.log("max marks:"+result);




