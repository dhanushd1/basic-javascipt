const age=[3,16,19,20,4,47]

// filter
let allowed=age.filter(function(value,index,Array){
    return value >=16;

 
});

console.log("is allowed",allowed);


// even number
const num=[3,16,19,20,4,47]

// filter
let allowed1=num.filter(function(value,index,Array){
    return value %2==0;

 
});

console.log("is even",allowed1);

// odd number

const num2=[3,16,19,20,4,47]

// filter
let allowed2=num2.filter(function(value,index,Array){
    return value %2==1;

 
});

console.log("is odd",allowed2);





