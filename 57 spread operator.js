let cars=["bmw","shift","nissan"];
let bikes=["ns","rs","rc","gt","re"];
// combine
let carsbike =cars.concat(bikes);

// spread operator
 let sports=[...cars,1000,{"name":"dhanush",age:12},...bikes]
 console.log(sports);