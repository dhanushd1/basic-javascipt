const num=[1,3,356,764,31,678,256,90];
// sort
let result=num.sort()
// find
let result1=num.find((value)=>{
    return value>50
});
// find methos first  it gives the first value example in above is 256 
// filter
let result2=num.filter((value)=>{
    return value>50
});
// map
let result3=num.map((value)=>{
    return value>50
});
// concatation 
let result4=num.map((value)=>{
    return "$"+value
});
// reduce
let result5=num.reduce((acc,value)=>{
    return acc*value
});


console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
