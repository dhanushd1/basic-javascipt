let number=[1,2,3,4,5];
// soln1
number=[];
console.log(number);
// soln 2
number.length=0;
console.log(number);
// soln3
number.splice(0,number.length);
console.log(number);
// soln4
while(number.length)number.pop;
console.log(number);
