const donations=[1,2,3,4,5,6,7,8];
let ans=donations.reduce(function(previousval,currentval){
    console.log("previousval",previousval);
    console.log("currentval",currentval);
    return previousval+currentval

});
console.log(ans);

const supermarket=[
    {id:1,name:"milk",cost:20},
    {id:2,name:"mango",cost:30},
    {id:3,name:"magi",cost:29},
]
// 0 is given because of itinal value should be given
let total=supermarket.reduce(function(accumultor,currentvalue){
    console.log("accumultor",accumultor);
   return accumultor+currentvalue.cost;
},0);
console.log("total cost is:",total);
// down to top
let total1=supermarket.reduceRight(function(accumultor,currentvalue){
    console.log("accumultor",accumultor);
   return accumultor+currentvalue.cost;
},0);
   console.log("total cost is:",total1);


