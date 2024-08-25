// clouning is just coping a object and duplicating it == clouning

const user={
    Name:"dhanush",
    getfullname(){
        console.log('my name is'+name);
    }
}


//  let another=Object.assign({},user);
//  console.log(another);

// adding new ley value 
// let another=Object.assign({age:12,
//     user})
// console.log(another);


// spread operator
let another={...user}
console.log(another);

