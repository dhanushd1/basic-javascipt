// let cars=["bmw","shift","nissan"];
let cars=[{name:"nissan"}];
let bikes=["ns","rs","rc","gt","re"];

// combin
let carsbike =cars.concat(bikes);
cars[0].name="bmw";
console.log(carsbike);
// extract
let carsbike2=carsbike.slice(2,7);
console.log(carsbike2);